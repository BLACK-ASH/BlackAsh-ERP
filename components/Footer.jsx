
import { CodeSquare } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
                    <FaGithub className="size-6" />
                </a>
                <a href="https://www.linkedin.com/in/ashif-shaikh-ash" target='_blank'>
                    <FaLinkedin className="size-6" />
                </a>
            </div>
        </footer>
    )
}

export default Footer