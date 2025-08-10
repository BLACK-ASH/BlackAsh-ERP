import Image from "next/image"
import { RegisterForm } from "@/components/register-form";

export default function LoginPage() {
  return (
    (<div className="grid min-h-[calc(100vh-12vh)] max-md:min-h-[calc(100vh-15vh)] lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
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
