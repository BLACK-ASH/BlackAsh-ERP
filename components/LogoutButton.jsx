"use client";
import { logout } from "@/lib/auth.action";
import { Button } from "./ui/button";

export const LogoutButton = () => {
  return (
    <Button className={"w-full"} onClick={() => logout()}>Logout</Button>
  )
}
