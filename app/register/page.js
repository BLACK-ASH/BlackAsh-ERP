import Image from "next/image"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import RegisterStudent from "@/components/RegisterStudent"
import RegisterFaculty from "@/components/RegisterFaculty"

export default function LoginPage() {
  return (
    (<div className="grid min-h-[calc(100vh-12vh)] max-md:min-h-[calc(100vh-15vh)] lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">

          <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue="student">
              <TabsList>
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <RegisterStudent/>
              </TabsContent>
              <TabsContent value="faculty">
                <RegisterFaculty/>
              </TabsContent>
            </Tabs>
          </div>

        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={"/login.jpg"}
          alt="Image"
          className="absolute inset-0 h-full w-full object-fill dark:brightness-[0.2] dark:grayscale"
          width={500} height={500}
        />
      </div>
    </div>)
  );
}
