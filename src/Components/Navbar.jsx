import { Link, Button } from "@heroui/react";
import Logo from '@/assets/logo.png'
import Image from "next/image";


const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Image src={Logo}alt="logo" width={200} height={200}></Image>
                        
                    </div>
                    
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/product">Products</Link></li>
                        <li><Link href="profile">My Profile</Link></li>
                    </ul>
                    <div className="space-x-2">
                         <Link href="/signup"><Button variant="secondary">Sign Up</Button></Link>
                         <Link href="/login"><Button variant="secondary">Login</Button></Link>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;