import { Calendar, ChevronUp, CodeSquare, Home, Search, Settings, User2 } from "lucide-react"
import { BsQrCodeScan } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ToggleTheme from "./ToggleTheme"
import { LogoutButton } from "./LogoutButton";
import { getUser } from "@/lib/auth.action";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Attendance",
        url: "/attendance",
        icon: BsQrCodeScan,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: CgProfile,
    },
    {
        title: "Notices",
        url: "/notices",
        icon: Calendar,
    },


]

export async function AppSidebar() {
    const user = await getUser()

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex justify-between gap-18 md:justify-start">
                    <div className="flex items-center gap-2 font-medium">
                        <div
                            className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <CodeSquare className="size-4" />
                        </div>
                        BlackAsh ERP
                    </div>
                    <ToggleTheme />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem  key={item.title}>
                                    <SidebarMenuButton className={"text-[16px]"} asChild>
                                        <a href={item.url}>
                                            <item.icon className="size-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                    {user ?
                        <SidebarGroupContent className={"grid md:grid-cols-2 gap-2 space-y-2"}>
                            <div className="flex justify-center items-center gap-2">
                                <User2 />
                                <p className="text-[16px] font-semibold text-balance">{user?.username}</p>
                            </div>
                            <LogoutButton />
                        </SidebarGroupContent>
                        :
                        <Button asChild>
                            <a href="/login">Login</a>
                        </Button>
                    }
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    )
}