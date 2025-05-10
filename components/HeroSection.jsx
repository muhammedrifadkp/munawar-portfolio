import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";

export default function HeroSection() {

    return (

        <div className="bg-zinc-50">
            <div className="container py-10 md:py-16 text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
                <div className="w-full lg:w-1/2 xl:py-14 lg:py-8">
                    <p className="tracking-widest text-sm md:text-base">OFFER FOR THE BEST INTERIOR</p>
                    <h1 className="py-4 text-3xl md:text-4xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
                        An aesthetic room is <br className="hidden sm:block" />given harmony
                    </h1>
                    <p className="pb-6 text-gray-500 xl:pb-10 text-sm md:text-base mx-auto lg:mx-0 max-w-md">
                        Change your view with the best interior design.
                        I provide personalized interior design for your Home.
                        Make every moment beautiful with thoughtful, creative design.
                    </p>
                    <Link href="/contact">
                        <button className="inline-flex items-center px-6 py-3 md:px-8 md:py-3 text-sm md:text-base text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                            Get Started <TbArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                        </button>
                    </Link>
                </div>

                <div className="hidden lg:block lg:w-1/2 relative">
                    <div className="absolute right-0 top-0 bottom-0 overflow-hidden">
                        <Image
                            src="/image/kitchen.png"
                            width={800}
                            height={500}
                            alt="Interior Design Kitchen"
                            className="xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}