import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function Services() {
    // Services data
    const services = [
        {
            id: 1,
            name: "3ds Max",
            description: "Professional 3D modeling, animation, and rendering software for creating stunning interior visualizations.",
            image: "/munawar_SERVICES/3ds Max.jpg",
            features: [
                "Detailed 3D modeling of interior spaces",
                "Realistic furniture and decor creation",
                "Architectural visualization",
                "Custom material development",
                "Lighting setup for realistic scenes"
            ]
        },
        {
            id: 2,
            name: "AutoCAD",
            description: "Industry-standard computer-aided design software for precise floor plans and technical drawings.",
            image: "/munawar_SERVICES/AutoCAD.jpg",
            features: [
                "Accurate floor plan creation",
                "Detailed technical drawings",
                "Precise measurements and scaling",
                "Construction documentation",
                "Space planning and layout design"
            ]
        },
        {
            id: 3,
            name: "Vray",
            description: "Advanced rendering technology for creating photorealistic images of interior design concepts.",
            image: "/munawar_SERVICES/Vray.jpg",
            features: [
                "Photorealistic rendering",
                "Advanced lighting simulation",
                "Realistic material creation",
                "High-quality texture mapping",
                "Environment and atmosphere effects"
            ]
        },
        {
            id: 4,
            name: "Photoshop",
            description: "Image editing software for enhancing renders and creating presentation materials.",
            image: "/munawar_SERVICES/Photoshop.jpg",
            features: [
                "Post-processing of rendered images",
                "Color correction and enhancement",
                "Mood board creation",
                "Marketing material development",
                "Digital concept sketching"
            ]
        },
        {
            id: 5,
            name: "Corona",
            description: "High-performance rendering engine for creating beautiful, realistic interior visualizations.",
            image: "/munawar_SERVICES/Corona.jpg",
            features: [
                "Fast and realistic rendering",
                "Interactive material editing",
                "Real-world camera simulation",
                "Light mixing and balancing",
                "Atmospheric effects"
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <div className="bg-[url('/munawar_SERVICES/services_bg.jpg')] bg-center bg-cover">
                <div className="bg-black/50">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">MY SERVICES</h1>
                </div>
            </div>

            {/* Services Overview */}
            <div className="container py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="mb-6 text-4xl font-medium">Professional Interior Design Tools</h2>
                    <p className="mb-12 text-xl text-gray-600">
                        I utilize industry-leading software and tools to create stunning, realistic visualizations of your interior spaces. From technical drawings to photorealistic renders, my expertise in these professional tools ensures exceptional results for your project.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-16 mt-16">
                    {services.map((service, index) => (
                        <div key={service.id} className={`grid items-center gap-8 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 md:flex-row-reverse'}`}>
                            {/* Image Section */}
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={service.image}
                                    width={600}
                                    height={400}
                                    alt={service.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 bg-zinc-50 rounded-xl">
                                <h3 className="mb-4 text-3xl font-semibold">{service.name}</h3>
                                <p className="mb-6 text-gray-600">{service.description}</p>

                                <h4 className="mb-3 text-xl font-medium">Key Features:</h4>
                                <ul className="pl-5 mb-6 space-y-2 list-disc text-gray-600">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-20 bg-zinc-100">
                <div className="container text-center">
                    <h2 className="mb-6 text-4xl font-medium">Ready to Transform Your Space?</h2>
                    <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600">
                        Let&apos;s work together to bring your interior design vision to life using these professional tools and my expertise.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-1 px-8 py-4 text-lg text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                    >
                        Contact Me <TbArrowUpRight className="text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}
