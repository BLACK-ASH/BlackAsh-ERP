import { CodeSquare } from 'lucide-react'
import ToggleTheme from './ToggleTheme'

const Navbar = () => {
    return (
        <nav className="flex h-[6vh] justify-between items-center p-4">
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="/" className="flex items-center gap-2 font-medium">
                    <div
                        className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <CodeSquare className="size-4" />
                    </div>
                    BlackAsh ERP
                </a>
            </div>
            <ToggleTheme />
        </nav>
    )
}

export default Navbar