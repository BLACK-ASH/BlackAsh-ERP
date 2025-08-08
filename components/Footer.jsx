
import { CodeSquare, Github, Linkedin } from 'lucide-react'
const Footer = () => {
   return (
        <footer className="flex h-[6vh] space-x-2 justify-between items-center max-md:flex-col p-4">
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="/" className="flex items-center gap-2 font-medium">
                    <div
                        className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <CodeSquare className="size-4" />
                    </div>
                    BlackAsh ERP
                </a>
            </div>
            <div>
                <p className="text-muted-foreground text-sm text-balance">
                    &copy; 2025 BlackAsh. All rights reserved.
                </p>
            </div>
            <div className="flex gap-4 items-center justify-between">
                <a href="https://github.com/BLACK-ASH" target='_blank'>
                    <Github className="size-6" />
                </a>
                <a href="https://www.linkedin.com/in/ashif-shaikh-ash" target='_blank'>
                    <Linkedin className="size-6" />
                </a>
            </div>
        </footer>
    )
}

export default Footer