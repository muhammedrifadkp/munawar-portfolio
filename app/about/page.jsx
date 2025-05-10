"use client";
import Image from 'next/image';
import { TbArrowUpRight, TbBrandLinkedin, TbBrandInstagram, TbMail, TbPhone, TbMapPin } from "react-icons/tb";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from 'react';

export default function About() {
    const [activeTab, setActiveTab] = useState('profile');

    // Skills with ratings
    const skills = [
        { name: "AutoCAD", rating: 5 },
        { name: "3ds Max", rating: 5 },
        { name: "Vray", rating: 4 },
        { name: "Photoshop", rating: 4 },
        { name: "Corona", rating: 4 },
        { name: "Space Planning", rating: 5 },
        { name: "Furniture & Fixture Planning", rating: 4 },
        { name: "Electrical Planning", rating: 4 },
        { name: "Material Selections", rating: 5 },
        { name: "Office Automation", rating: 4 },
    ];

    // Education timeline
    const education = [
        {
            period: "2022 - August 2022",
            degree: "ACE",
            institution: "KASARAGOD"
        },
        {
            period: "2020",
            degree: "M.COMMERCE",
            institution: "M.MODEL SCHOOL"
        },
        {
            period: "June 2019 - March 2019",
            degree: "HSE",
            institution: "KERALA BOARD"
        },
        {
            period: "June 2016 - March 2018",
            degree: "SSLC",
            institution: "KERALA BOARD"
        }
    ];

    // Experience timeline
    const experience = [
        {
            period: "January 2023 - Present",
            position: "Interior Designer",
            company: "DIPLOMA/BVT KASARAGOD"
        }
    ];

    // Certifications
    const certifications = [
        "Master Diploma in Interior Architecture & Design",
        "Basic drafting, accounting & presentation training",
        "Office Automation (MS Office)",
        "Basic drafting, furniture & Anthropometrics, Ergonomics",
        "Kitchen designing, Cabinetry & Residential space planning",
        "Furniture designing & 3D electrical designing, Flooring & RCP",
        "2D Modeling using AutoCAD",
        "3D Visualization using 3ds Max + Vray",
        "2D Modeling using Photoshop",
        "Corona"
    ];

    // Languages
    const languages = [
        { name: "English", proficiency: 4 },
        { name: "Hindi", proficiency: 4 },
        { name: "Malayalam", proficiency: 5 }
    ];

    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left">ABOUT ME</h1>
            </div>

            <div className="container py-16">
                {/* Profile Card and Summary Section */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Profile Card with Hover Effect */}
                    <div className="group">
                        <div className="relative overflow-hidden transition-all duration-500 rounded-xl shadow-xl group-hover:shadow-2xl">
                            {/* Profile Image */}
                            <div className="relative h-[450px] overflow-hidden">
                                <Image
                                    src="/munawar_photo.png"
                                    fill
                                    style={{objectFit: "cover"}}
                                    alt="Munawar - Interior Designer"
                                    className="transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay that appears on hover */}
                                <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-90"></div>
                            </div>

                            {/* Profile Info - Slides up on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 transform translate-y-8 group-hover:translate-y-0">
                                <h2 className="mb-2 text-3xl font-bold text-white">Munawar</h2>
                                <p className="mb-4 text-lg text-white/90">Interior & Architecture Designer</p>

                                <div className="flex flex-col gap-2 mt-4 text-white/90">
                                    <div className="flex items-center gap-2">
                                        <TbMapPin className="text-white/70" />
                                        <span>Nekraje, Badiadka Panchayath, 671321</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TbPhone className="text-white/70" />
                                        <span>+91 9895344154</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TbMail className="text-white/70" />
                                        <span>munnumunu9@gmail.com</span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-3 mt-6">
                                    <a href="https://www.instagram.com/munnuhhhh._?igsh=MTl0OGR5cDRsaWxxeQ==&utm_source=ig_contact_invite"
                                       className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 hover:bg-white/40"
                                       target="_blank" rel="noopener noreferrer">
                                        <TbBrandInstagram className="text-xl text-white" />
                                    </a>
                                    <a href="mailto:munnumunu9@gmail.com"
                                       className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 hover:bg-white/40">
                                        <TbMail className="text-xl text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary and Introduction */}
                    <div className="lg:col-span-2">
                        <h2 className="mb-6 text-4xl font-semibold">Professional Summary</h2>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                            Motivated interior designer with a completed course in interior design and expertise in AutoCAD.
                            With 3+ years of experience, I seek to contribute creative solutions and a fresh perspective to design projects
                            while enhancing functional and aesthetic spaces.
                        </p>
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                            My approach combines aesthetic beauty with practical functionality to create spaces that truly enhance how people live and work.
                            Every project begins with understanding my client&apos;s vision, lifestyle, and needs. I pay careful attention to every detail,
                            from space planning and material selection to lighting and decorative elements, ensuring a cohesive and beautiful result.
                        </p>

                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`px-4 py-2 font-medium transition-colors rounded-t-lg ${activeTab === 'profile' ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('skills')}
                                className={`px-4 py-2 font-medium transition-colors rounded-t-lg ${activeTab === 'skills' ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`px-4 py-2 font-medium transition-colors rounded-t-lg ${activeTab === 'education' ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Education
                            </button>
                            <button
                                onClick={() => setActiveTab('experience')}
                                className={`px-4 py-2 font-medium transition-colors rounded-t-lg ${activeTab === 'experience' ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => setActiveTab('certifications')}
                                className={`px-4 py-2 font-medium transition-colors rounded-t-lg ${activeTab === 'certifications' ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Certifications
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6 bg-gray-50 rounded-lg">
                            {/* Profile Tab */}
                            {activeTab === 'profile' && (
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-medium">About Me</h3>
                                    <p className="text-gray-700">
                                        I&apos;m a dedicated interior designer with expertise in creating functional and aesthetically pleasing spaces.
                                        My passion for design drives me to constantly explore new ideas and solutions that enhance the way people
                                        interact with their environments.
                                    </p>
                                    <div className="mt-6">
                                        <h4 className="mb-3 text-xl font-medium">Languages</h4>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                            {languages.map((language, index) => (
                                                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                                                    <p className="mb-2 font-medium">{language.name}</p>
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            i < language.proficiency ?
                                                            <FaStar key={i} className="text-yellow-500" /> :
                                                            <FaRegStar key={i} className="text-gray-300" />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Skills Tab */}
                            {activeTab === 'skills' && (
                                <div>
                                    <h3 className="mb-6 text-2xl font-medium">Technical Skills</h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="p-4 transition-all bg-white rounded-lg shadow-sm hover:shadow-md">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-medium">{skill.name}</h4>
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            i < skill.rating ?
                                                            <FaStar key={i} className="text-yellow-500" /> :
                                                            <FaRegStar key={i} className="text-gray-300" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                                    <div
                                                        className="h-2 bg-gray-800 rounded-full"
                                                        style={{ width: `${skill.rating * 20}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Education Tab */}
                            {activeTab === 'education' && (
                                <div>
                                    <h3 className="mb-6 text-2xl font-medium">Education</h3>
                                    <div className="relative pl-8 border-l-2 border-gray-300">
                                        {education.map((edu, index) => (
                                            <div key={index} className="relative mb-8 last:mb-0">
                                                <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-[18px]"></div>
                                                <div className="p-4 transition-all bg-white rounded-lg shadow-sm hover:shadow-md">
                                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-gray-800 rounded-full">{edu.period}</span>
                                                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                                                    <p className="text-gray-600">{edu.institution}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Experience Tab */}
                            {activeTab === 'experience' && (
                                <div>
                                    <h3 className="mb-6 text-2xl font-medium">Professional Experience</h3>
                                    <div className="relative pl-8 border-l-2 border-gray-300">
                                        {experience.map((exp, index) => (
                                            <div key={index} className="relative mb-8 last:mb-0">
                                                <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-[18px]"></div>
                                                <div className="p-4 transition-all bg-white rounded-lg shadow-sm hover:shadow-md">
                                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-gray-800 rounded-full">{exp.period}</span>
                                                    <h4 className="text-xl font-medium">{exp.position}</h4>
                                                    <p className="text-gray-600">{exp.company}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Certifications Tab */}
                            {activeTab === 'certifications' && (
                                <div>
                                    <h3 className="mb-6 text-2xl font-medium">Certifications & Training</h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {certifications.map((cert, index) => (
                                            <div key={index} className="p-4 transition-all bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white bg-gray-800 rounded-full">
                                                        {index + 1}
                                                    </div>
                                                    <p className="font-medium">{cert}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Portfolio Highlight Section */}
                <div className="py-16 mt-16 border-t border-gray-200">
                    <h2 className="mb-12 text-4xl font-semibold text-center">My Design Philosophy</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
                            <h3 className="mb-4 text-2xl font-medium">Functionality</h3>
                            <p className="text-gray-700">
                                I believe that great design must be functional first. Every element in a space should serve a purpose
                                while contributing to the overall aesthetic.
                            </p>
                        </div>
                        <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
                            <h3 className="mb-4 text-2xl font-medium">Aesthetics</h3>
                            <p className="text-gray-700">
                                Beauty in design comes from harmony, balance, and attention to detail. I create spaces that are
                                visually stunning while remaining practical and livable.
                            </p>
                        </div>
                        <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
                            <h3 className="mb-4 text-2xl font-medium">Personalization</h3>
                            <p className="text-gray-700">
                                Every client is unique, and their space should reflect their personality and lifestyle. I work closely
                                with clients to create designs that are truly their own.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="p-12 mt-16 text-center bg-gray-100 rounded-xl">
                    <h2 className="mb-6 text-3xl font-semibold">Ready to Transform Your Space?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
                        Let&apos;s work together to create a space that reflects your style and meets your needs.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-1 px-8 py-3 text-lg text-white transition-all rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                    >
                        Contact Me <TbArrowUpRight className="text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}