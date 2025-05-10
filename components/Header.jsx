import Image from "next/image";
import logo from "../public/munnu_logo.png";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-header bg-opacity-80 bg-zinc-100 backdrop-blur-lg shadow-sm">
            <div className="container flex items-center justify-between py-4 md:py-6 lg:py-8">
                <Link href="/" className="relative z-50">
                    <Image
                        src={logo}
                        alt="Munawar Interior Design"
                        className="w-32 h-5 md:w-40 md:h-6"
                        priority
                    />
                </Link>

                <Navigation />
            </div>
        </div>
    );
}