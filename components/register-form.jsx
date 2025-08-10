"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormDescription,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { register } from "@/lib/auth.action"
import { toast } from "sonner"

const formSchema = z.object({
    role: z.enum(["Student", "Faculty"]),
    username: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20),
})

export function RegisterForm({
    className,
    ...props
}) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: "Student",
            username: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const res = await register(values);
        console.log(res);

        if (res.status !== 200) {
            toast.error(res.message);
            return
        }
        toast.success("Registrtion Success");
    }


    return (
        (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-2xl font-bold">Register your account</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            Enter your credentials below to register your account
                        </p>
                    </div>
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="flex gap-3 ">
                                <FormLabel>Select your role  </FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className={"flex "}
                                    >
                                        <FormItem className="flex items-center gap-3">
                                            <FormControl>
                                                <RadioGroupItem value="Student" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Student
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center gap-3">
                                            <FormControl>
                                                <RadioGroupItem value="Faculty" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Faculty
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter Your Name As Per Your ID Card.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="youremail@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Register</Button>
                    <div>
                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <a href="/login" className="underline underline-offset-4">
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </Form>
        )
    );
}
