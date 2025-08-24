"use client"
import z from "zod"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { register } from "@/lib/auth.action"
import { toast } from "sonner"

// Creating Student Registration Form Schema
const formSchema = z.object({
    role: z.enum(["Student", "Faculty"]),
    username: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    department: z.enum(["CS", "Bio-Tech", "BMS", "BAF", "Science", "Arts", "Commerce", "Other"]),
    className: z.enum(["FYJC", "SYJC", "First Year", "Second Year", "Third Year", "Master First Year", "Master Second Year", "Other"]),
    rollNo: z.string(),
})

const RegisterStudent = ({
    className,
    ...props
}) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: "Student",
            username: "",
            email: "",
            password: "",
            department: "Other",
            className: "Other",
            rollNo: "",
        },
    })

    // form submission
    async function onSubmit(data) {  
        const res = await register(data);
        if (res.status !== 200) {
            toast.error(res.message);
            return
        }
    }

    return (
        <Card>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
                    <CardHeader>
                        <CardTitle>Register Your Student Account</CardTitle>
                        <CardDescription>
                            Enter your credentials below to register your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">


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
                                        <Input type="password" placeholder="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                                <FormItem className={"flex gap-2"}>
                                    <FormLabel>Department : </FormLabel>
                                    <FormControl>
                                        <Select 
                                        onValueChange={field.onChange}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Your Department" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="CS">Computer Science</SelectItem>
                                                <SelectItem value="Bio-Tech">Biotechnology</SelectItem>
                                                <SelectItem value="BMS">BMS</SelectItem>
                                                <SelectItem value="BAF">BAF</SelectItem>
                                                <SelectItem value="Science">Science</SelectItem>
                                                <SelectItem value="Arts">Arts</SelectItem>
                                                <SelectItem value="Commerce">Commerce</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="className"
                            render={({ field }) => (
                                <FormItem className={"flex gap-2"}>
                                    <FormLabel>Class : </FormLabel>
                                    <FormControl>
                                        <Select 
                                        onValueChange={field.onChange}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Your Class" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="FYJC">FYJC</SelectItem>
                                                <SelectItem value="SYJC">SYJC</SelectItem>
                                                <SelectItem value="First Year">First Year</SelectItem>
                                                <SelectItem value="Second Year">Second Year</SelectItem>
                                                <SelectItem value="Third Year">Third Year</SelectItem>
                                                <SelectItem value="Master First Year">Master First Year</SelectItem>
                                                <SelectItem value="Master Second Year">Master Second Year</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="rollNo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Roll No </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Roll No" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
                            {form.formState.isSubmitting ? 
                            <div className="flex items-center justify-center gap-2">
                                <Loader2 className="animate-spin" />
                                Please wait
                            </div>
                            :
                             "Register"
                             }
                        </Button>
                        <div>
                            <p className="text-center text-sm">
                                Already have an account?{" "}
                                <a href="/login" className="underline underline-offset-4">
                                    Login
                                </a>
                            </p>
                        </div>
                    </CardFooter>

                </form>
            </Form>



        </Card>
    )
}

export default RegisterStudent