import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-zinc-100">
            <div className="container flex flex-col items-center justify-between gap-6 py-10 text-center border-b-2 md:py-14 lg:flex-row lg:text-left">
                <div className="py-2 md:py-4">
                    <p className="text-xl md:text-2xl">Let&apos;s</p>
                    <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl">Get in touch</h1>
                </div>
                <a
                    className="inline-flex items-center gap-1 px-6 py-3 text-sm md:text-base text-white transition-all rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                    href="/contact"
                >
                    CONTACT ME <TbArrowUpRight className="text-lg md:text-xl" />
                </a>
            </div>
        </div>
    )
}