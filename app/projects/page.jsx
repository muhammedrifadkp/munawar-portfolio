"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');

    const exteriorProjects = [
        {
            id: 1,
            name: 'Modern Exterior Design',
            description: 'Contemporary exterior design with clean lines and elegant features for a stunning first impression.',
            image: '/munawar_projects/Exterior/munawar_Exterior_project.jpg',
            category: 'exterior',
        },
        {
            id: 2,
            name: 'Residential Exterior View',
            description: 'Beautiful residential exterior with balanced proportions and thoughtful architectural details.',
            image: '/munawar_projects/Exterior/munawar_Exterior_project_samad1.jpg',
            category: 'exterior',
        },
        {
            id: 3,
            name: 'Contemporary House Design',
            description: 'Modern house exterior featuring innovative design elements and premium materials.',
            image: '/munawar_projects/Exterior/munawar_Exterior_project_samad2.jpg',
            category: 'exterior',
        },
        {
            id: 4,
            name: 'Elegant Home Exterior',
            description: 'Sophisticated exterior design that combines functionality with aesthetic appeal.',
            image: '/munawar_projects/Exterior/munawar_Exterior_project_samad3.jpg',
            category: 'exterior',
        },
    ];

    const interiorProjects = [
        {
            id: 5,
            name: 'Photoshop Enhanced Interior',
            description: 'Beautifully edited interior space showcasing the power of professional post-processing.',
            image: '/munawar_projects/Interiors/photoshop_prjct_ munnu.jpg',
            category: 'interior',
        },
        {
            id: 6,
            name: 'Modern Living Space',
            description: 'Contemporary interior design with careful attention to lighting, materials, and spatial arrangement.',
            image: '/munawar_projects/Interiors/render_munawar_Interiors_project1.jpg',
            category: 'interior',
        },
        {
            id: 7,
            name: 'Elegant Interior Design',
            description: 'Sophisticated interior space with harmonious colors and thoughtful furniture placement.',
            image: '/munawar_projects/Interiors/render_munawar_Interiors_project2.jpg',
            category: 'interior',
        },
        {
            id: 8,
            name: 'Luxury Home Interior',
            description: 'High-end interior design featuring premium materials and exquisite attention to detail.',
            image: '/munawar_projects/Interiors/render_munawar_Interiors_project3.jpg',
            category: 'interior',
        },
    ];

    const allProjects = [...exteriorProjects, ...interiorProjects];

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'all'
        ? allProjects
        : activeCategory === 'exterior'
            ? exteriorProjects
            : interiorProjects;
    return (
        <div className="">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">MY PROJECTS</h1>
            </div>

            {/* Category Filter */}
            <div className="container py-8">
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-6 py-2 font-medium rounded-full transition ${activeCategory === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => setActiveCategory('exterior')}
                        className={`px-6 py-2 font-medium rounded-full transition ${activeCategory === 'exterior' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        Exterior Designs
                    </button>
                    <button
                        onClick={() => setActiveCategory('interior')}
                        className={`px-6 py-2 font-medium rounded-full transition ${activeCategory === 'interior' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        Interior Designs
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="relative overflow-hidden rounded-xl group">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    width={800}
                                    height={600}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-6 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                                <h2 className="text-2xl font-semibold">{project.name}</h2>
                                <p className="py-2">{project.description}</p>
                                <span className="inline-block px-3 py-1 mt-2 text-xs font-medium uppercase bg-white bg-opacity-20 rounded-full">
                                    {project.category === 'exterior' ? 'Exterior Design' : 'Interior Design'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}