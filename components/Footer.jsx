import Link from "next/link";


export default function Footer() {

    return (
        <div className="bg-zinc-100">
            <div className="container py-10 md:py-14">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="pb-3 text-lg font-semibold md:text-xl">SERVICES</h2>
                        <div className="flex flex-col space-y-1">
                            <Link className="py-1 hover:underline" href="/about">About Me</Link>
                            <Link className="py-1 hover:underline" href="/projects">Projects</Link>
                            <Link className="py-1 hover:underline" href="/gallery">Gallery</Link>
                            <Link className="py-1 hover:underline" href="/contact">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-3 text-lg font-semibold md:text-xl">DESIGN SERVICES</h2>
                        <div className="flex flex-col space-y-1">
                            <Link className="py-1 hover:underline" href="/services">3ds Max</Link>
                            <Link className="py-1 hover:underline" href="/services">AutoCAD</Link>
                            <Link className="py-1 hover:underline" href="/services">Vray</Link>
                            <Link className="py-1 hover:underline" href="/services">Photoshop</Link>
                            <Link className="py-1 hover:underline" href="/services">Corona</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-3 text-lg font-semibold md:text-xl">CONNECT</h2>
                        <div className="flex flex-col space-y-1">
                            <a className="py-1 hover:underline" href="https://www.instagram.com/munnuhhhh._?igsh=MTl0OGR5cDRsaWxxeQ==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <span className="py-1 text-gray-400">Linkedin (Coming Soon)</span>
                            <span className="py-1 text-gray-400">Twitter (Coming Soon)</span>
                        </div>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <h2 className="pb-3 text-lg font-semibold md:text-xl">STAY UPDATED</h2>
                        <div className="relative">
                            <input
                                className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-12 md:h-14"
                                type="text"
                                placeholder="Email Address"
                            />
                            <button className="absolute h-8 px-3 text-sm text-white bg-black rounded-full md:h-10 top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black">
                                Subscribe
                            </button>
                        </div>
                        <p className="pt-4 text-sm text-gray-500 md:text-base">
                            By subscribing to my newsletter, you agree to receive emails from me. Your personal data will be stored and processed in accordance with my Privacy Policy and you can unsubscribe at any time.
                        </p>
                    </div>
                </div>

                <div className="pt-8 mt-8 text-center text-sm text-gray-500 border-t border-gray-200">
                    <p>© {new Date().getFullYear()} Munawar Interior Design. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
