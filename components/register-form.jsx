import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function RegisterForm({
    className,
    ...props
}) {
    return (
        (<form  className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Register your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your credintials below to register your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="flex gap-10">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                        <SelectTrigger id="role">
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="faculty">Faculty</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="name">Username</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                    </div>
                    <Input id="confirm-password" type="confirm-password" required />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>

            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                    Login
                </a>
            </div>
        </form>)
    );
}
