"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";


export default function CatalogSwiperSection() {

    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left ">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider">LUXURY DECOR TO CREATE COMFORT IN YOUR HOME</h2>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p>
                                With my passion for design and decor, I carefully select furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p>
                                I create distinctive and unique designs that are inspired by the latest trends in interior design while maintaining timeless appeal.
                            </p>
                            <Link href="/gallery" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowUpRight /> </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}

            >
                <SwiperSlide>
                    <Image src="/munawar_projects/Exterior/munawar_Exterior_project_samad1.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/munawar_projects/Exterior/munawar_Exterior_project.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/munawar_projects/Interiors/render_munawar_Interiors_project2.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/munawar_projects/Exterior/munawar_Exterior_project_samad3.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/munawar_projects/Interiors/render_munawar_Interiors_project1.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}