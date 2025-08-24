import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Student", "Faculty"],
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    department: {
        type: String,
        default: null
    },
    studentInfo: {
        className: {
            type: String,
            default: null
        },       // For students
        rollNo: {
            type: String,
            default: null
        },
        stream: {
            type: String,
            default: null
        },
    },
    // For teachers
    teacherInfo: {
        // Optional fields based on role
        subjectsTaught: [String],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String,
        default: null
    },
    verifyTokenExpiry: {
        type: Date,
        default: null
    },
    updateToken: {
        type: String,
        default: null
    },
    updateTokenExpiry: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;