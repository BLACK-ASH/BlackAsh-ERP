"use server"
import connectDB from "@/db/connect"
import User from "@/models/user.model";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { cache } from "react";

export const login = async (data) => {
    await connectDB();
    const { email, password } = data;

    // Finding user in DB
    const user = await User.findOne({ email });
    if (!user) return { message: "User does not exist", status: 404 };

    // Checking password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return { message: "Incorrect Password", status: 404 };

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    await cookies().set("token", token, {
        httpOnly: true,
        secure: "lax",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });
    redirect("/profile");
}

export const logout = async () => {
    await cookies().delete("token");
    redirect("/login");
}

export const register = async (data) => {
    await connectDB();
    const { username, email, password, role } = data;
    const user = await User.findOne({ email });
    if (user) return { message: "User already exists", status: 409 };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ username, email, password: hashPassword, role });
    if (!newUser) return { message: "Registration Failed", status: 500 };

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    await cookies().set("token", token, {
        httpOnly: true,
        secure: "lax",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });
    redirect("/dashboard");
}

const getToken= async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    if (!token) return null;
    const tokenData = jwt.verify(token.value, process.env.JWT_SECRET);
    return tokenData;
}

async function _getUser() {
    await connectDB();

    const token = await getToken();
    if (!token) return null;
    
    const user = await User.findById(token.id).select("id username email role department isAdmin studentInfo teacherInfo");
    return user;
}

export default getToken;
export const getUser = cache(_getUser);

