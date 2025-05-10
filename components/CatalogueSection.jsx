"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "INTERIOR DESIGN",
            title: "Modern Living Space",
            image: "/catalogue_image/INTERIOR.jpg",
            description: "Contemporary living space with elegant furnishings and thoughtful lighting design.",
            link: "/services"
        },
        {
            id: "02",
            catagory: "EXTERIOR DESIGN",
            title: "Modern Villa Concept",
            image: "/catalogue_image/EXTERIOR.jpg",
            description: "Contemporary exterior design with clean lines and innovative architectural elements.",
            link: "/services"
        },
        {
            id: "03",
            catagory: "AUTOCAD",
            title: "Technical Drawing",
            image: "/catalogue_image/AUTOCAD (2).jpg",
            description: "Precise technical drawings and floor plans created with industry-standard AutoCAD software.",
            link: "/services"
        },
        {
            id: "04",
            catagory: "VRAY RENDERING",
            title: "Photorealistic Visualization",
            image: "/catalogue_image/VRAY_RENDERING.jpg",
            description: "Stunning photorealistic renderings that bring design concepts to life with advanced lighting and materials.",
            link: "/services"
        },
    ]

    return (
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 divide-gray-300 lg:divide-x">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group shadow-sm rounded-lg">
                    <div className="overflow-hidden">
                        <Image
                            src={item.image}
                            width={600}
                            height={400}
                            alt={item.title}
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute top-0 p-4 sm:p-6 m-3 sm:m-6 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 group-hover:bg-opacity-80 max-w-[calc(100%-24px)] rounded-lg">
                        <div className="flex justify-between pb-2 sm:pb-3">
                            <p className="text-xs sm:text-sm font-medium text-gray-700">{item.catagory}</p>
                            <span className="text-xs sm:text-sm font-bold text-gray-900">{item.id}</span>
                        </div>
                        <a className="block text-lg sm:text-xl font-semibold text-gray-900 transition-colors hover:text-gray-700" href={item.link}>{item.title}</a>
                        <p className="py-2 sm:py-3 text-sm sm:text-base text-gray-600 line-clamp-3">{item.description}</p>
                        <a
                            className="inline-flex items-center text-sm sm:text-base font-medium text-gray-900 transition-all hover:text-gray-700 hover:translate-x-1"
                            href={item.link}
                        >
                            See Details <TbArrowNarrowRight className="ml-2 text-lg sm:text-xl" />
                        </a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-500 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100/90">
                        <p className="tracking-wider font-medium -rotate-90">{item.catagory}</p>
                        <span className="font-bold">
                            {item.id}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}