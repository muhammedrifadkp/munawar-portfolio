import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-10 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 md:pb-8">
                <a className="py-4 text-2xl sm:text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">
                    An aesthetic room is <br className="hidden sm:block" />given harmony
                </a>
                <p className="tracking-wider text-gray-400 text-sm md:text-base">DESIGN EXCELLENCE</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 place-items-center">
                <div className="order-2 lg:order-1">
                    <Image
                        src="/image/aboutfront.png"
                        width={900}
                        height={500}
                        alt="Interior Design Showcase"
                        className="hidden md:block w-full h-auto object-cover rounded-lg shadow-sm"
                    />
                </div>

                <div className="order-1 lg:order-2">
                    <p className="px-0 md:px-6 lg:px-12 pb-6 text-gray-500 xl:pb-10 text-sm md:text-base">
                        Munawar is a passionate freelance interior designer specializing in creating beautiful, functional spaces. I provide personalized interior design services for your home. With years of experience and a keen eye for detail, I transform spaces into stunning environments that reflect your unique style and personality.
                    </p>
                </div>
            </div>
        </div>
    );
}