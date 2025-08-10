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
    console.log(user);
    

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
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
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
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> <span>{user?.username}</span>
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <LogoutButton />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}