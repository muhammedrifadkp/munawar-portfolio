"use client";
import { TbArrowUpRight, TbBrandInstagram, TbBrandFacebook, TbBrandTwitter, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear error when user starts typing
        if (formErrors[id]) {
            setFormErrors({ ...formErrors, [id]: "" });
        }
    };

    // Validate form
    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }

        if (!formData.subject.trim()) {
            errors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate form
        const errors = validateForm();
        setFormErrors(errors);

        // If no errors, proceed with WhatsApp redirect
        if (Object.keys(errors).length === 0) {
            // Format the message for WhatsApp
            const whatsappMessage = `
*New Contact Form Submission*
---------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
---------------------------
            `.trim();

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Munawar's WhatsApp number (with country code)
            const phoneNumber = "919895344154"; // 91 is India's country code

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappURL, "_blank");

            // Reset form after submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }

        setIsSubmitting(false);
    };
    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <div className="bg-[url('/munawar_SERVICES/Contact_bg.jpg')] bg-center bg-cover">
                <div className="bg-black/50">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">CONTACT ME</h1>
                </div>
            </div>

            {/* Contact Form and Info Section */}
            <div className="container py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="p-8 bg-white rounded-xl shadow-lg">
                        <h2 className="mb-6 text-3xl font-medium">Get In Touch</h2>
                        <p className="mb-8 text-gray-600">I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                                            formErrors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Your name"
                                    />
                                    {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Your email"
                                    />
                                    {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                                        formErrors.subject ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Subject"
                                />
                                {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                                        formErrors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Your message"
                                ></textarea>
                                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white transition-all rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} <TbArrowUpRight className="text-xl" />
                                </button>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <TbBrandWhatsapp className="text-xl text-green-600" />
                                    <span className="text-sm">Message will be sent via WhatsApp</span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col justify-between">
                        <div className="p-8 bg-zinc-100 rounded-xl">
                            <h2 className="mb-6 text-3xl font-medium">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-white bg-gray-900 rounded-full">
                                        <FiMapPin className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">My Location</h3>
                                        <p className="text-gray-600">Nekraje, Badiadka Panchayath, 671321</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-white bg-gray-900 rounded-full">
                                        <FiPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">Phone Number</h3>
                                        <p className="text-gray-600">+91 9895344154</p>
                                        <a
                                            href="https://wa.me/919895344154"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-1 mt-2 text-sm font-medium text-white transition-colors bg-green-600 rounded-full hover:bg-green-700"
                                        >
                                            <TbBrandWhatsapp className="text-base" />
                                            WhatsApp Me
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-white bg-gray-900 rounded-full">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">Email Address</h3>
                                        <p className="text-gray-600">munnumunu9@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-white bg-gray-900 rounded-full">
                                        <FiClock className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                                        <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="p-8 mt-8 bg-zinc-100 rounded-xl">
                            <h3 className="mb-4 text-xl font-medium">Follow Me</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/munnuhhhh._?igsh=MTl0OGR5cDRsaWxxeQ==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="p-3 text-white transition-all bg-gray-900 rounded-full hover:bg-gray-700">
                                    <TbBrandInstagram className="text-xl" />
                                </a>
                                <a href="#" className="p-3 text-white transition-all bg-gray-500 rounded-full cursor-not-allowed opacity-60">
                                    <TbBrandFacebook className="text-xl" />
                                </a>
                                <a href="#" className="p-3 text-white transition-all bg-gray-500 rounded-full cursor-not-allowed opacity-60">
                                    <TbBrandTwitter className="text-xl" />
                                </a>
                                <a href="#" className="p-3 text-white transition-all bg-gray-500 rounded-full cursor-not-allowed opacity-60">
                                    <TbBrandLinkedin className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container py-12">
                <div className="overflow-hidden rounded-xl shadow-lg h-[400px] bg-zinc-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.950528097078!2d75.07139187411397!3d12.585512223227353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba49bdb68694a3d%3A0xeb826cd6828246c1!2z4LSs4LSm4LS_4LSv4LSf4LWB4LSV4LWN4LSVIOC0l-C1jeC0sOC0vuC0riDgtKrgtJ7gtY3gtJrgtL7gtK_gtKTgtY3gtKTgtY0!5e0!3m2!1sml!2sin!4v1746856120882!5m2!1sml!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Munawar's Location Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}