"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT ME' },
    { href: '/gallery', label: 'GALLERY' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)

    // Close menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile menu toggle button */}
            <button
                className={`flex items-center justify-center w-12 h-12 p-2 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-white z-50 fixed top-4 right-4 shadow-lg ${isOpen ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}
                onClick={() => setOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    className={`fill-current h-6 w-6 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-90" : ""}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    ) : (
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    )}
                </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex gap-x-6">
                {nav.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`text-lg py-0 transition-colors duration-200 hover:text-black-300 ${
                            pathname === href ? 'text-black font-semibold' : 'text-black-200'
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && <MobileMenu isOpen={isOpen} toggleMenu={() => setOpen(false)} />}
            </AnimatePresence>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ease-in-out lg:hidden ${
                    isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setOpen(false)}
            ></div>

            {/* Desktop contact button */}
            <Link
                href="/contact"
                className="items-center hidden px-5 py-2 font-medium text-gray-900 bg-white border border-white rounded-full shadow lg:inline-flex hover:bg-gray-100"
            >
                Contact Me <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
        </>
    )
}