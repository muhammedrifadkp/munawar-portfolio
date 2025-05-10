
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="container py-10">
            <h1 className="mb-12 text-4xl font-semibold text-center">Design Portfolio Gallery</h1>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {/* Column 1 - Exterior Focus */}
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Exterior/munawar_Exterior_project.jpg"
                            width={600}
                            height={400}
                            alt="Exterior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Interiors/render_munawar_Interiors_project1.jpg"
                            width={600}
                            height={400}
                            alt="Interior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Exterior/munawar_Exterior_project_samad1.jpg"
                            width={600}
                            height={400}
                            alt="Exterior Design"
                        />
                    </div>
                </div>

                {/* Column 2 - Mixed */}
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Interiors/render_munawar_Interiors_project2.jpg"
                            width={600}
                            height={400}
                            alt="Interior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Exterior/munawar_Exterior_project_samad2.jpg"
                            width={600}
                            height={400}
                            alt="Exterior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Interiors/photoshop_prjct_ munnu.jpg"
                            width={600}
                            height={400}
                            alt="Photoshop Project"
                        />
                    </div>
                </div>

                {/* Column 3 - Interior Focus */}
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Exterior/munawar_Exterior_project_samad3.jpg"
                            width={600}
                            height={400}
                            alt="Exterior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Interiors/render_munawar_Interiors_project3.jpg"
                            width={600}
                            height={400}
                            alt="Interior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Exterior/munawar_Exterior_project.jpg"
                            width={600}
                            height={400}
                            alt="Exterior Design"
                        />
                    </div>
                </div>

                {/* Column 4 - Mixed */}
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Interiors/render_munawar_Interiors_project1.jpg"
                            width={600}
                            height={400}
                            alt="Interior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Exterior/munawar_Exterior_project_samad2.jpg"
                            width={600}
                            height={400}
                            alt="Exterior Design"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                            src="/munawar_projects/Interiors/render_munawar_Interiors_project3.jpg"
                            width={600}
                            height={400}
                            alt="Interior Design"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}