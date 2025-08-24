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
import { Loader2 } from "lucide-react"
import { register } from "@/lib/auth.action"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"

const subjects = [
    "python",
    "java",
    "c++",
    "c",
    "maths",
    "physics",
    "chemistry",
    "biology",
]

// Creating Faculty Registration Form Schema
const formSchema = z.object({
    role: z.enum(["Student", "Faculty"]),
    username: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    department: z.enum(["CS", "Bio-Tech", "BMS", "BAF", "Science", "Arts", "Commerce", "Other"]),
    subjectsTaught: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
})



const RegisterFaculty = ({
    className,
    ...props
}) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: "Faculty",
            username: "",
            email: "",
            password: "",
            department: "Other",
            subjectsTaught: [],
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
                        <CardTitle>Register Your Faculty Account</CardTitle>
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
                            name="subjectsTaught"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">Subjects</FormLabel>
                                        <FormDescription>
                                            Select the subjects you to teach.
                                        </FormDescription>
                                    </div>
                                    {subjects.map((item, index) => (
                                        <FormField
                                            key={index}
                                            control={form.control}
                                            name="subjectsTaught"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={index}
                                                        className="flex flex-row items-center gap-2"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(item)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-sm font-normal">
                                                            {item}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
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

export default RegisterFaculty