import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./ContactUs.module.css"


export default function ContactUs() {
    return (
        <div className="relative min-h-screen text-gray-800 overflow-hidden">

            {/* VIDEO BACKGROUND */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={`/4KBlueBackGround.mp4`} type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* CONTENT */}
            <div className="relative z-10">

                {/* HERO */}
                <section className="py-40 px-6 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-gray-200 text-lg"
                    >
                        We build modern, scalable, high-performance web applications.
                    </motion.p>
                </section>

                {/* ABOUT */}
                <section className="py-16 px-6 max-w-6xl mx-auto text-white">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt="team"
                                className="rounded-xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>

                            <p className="text-gray-200 mb-6">
                                We are a passionate team focused on building exceptional digital experiences.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Modern and scalable architecture",
                                    "User-focused design approach",
                                    "High performance and clean code",
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.15 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="text-blue-400">✔</span>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FORM */}
                <section className="py-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                rounded-2xl shadow-2xl p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
                            Get in Touch
                        </h2>

                        <form className="grid md:grid-cols-2 gap-6">

                            <FloatingInput label="Full Name" />
                            <FloatingInput label="Email" type="email" />
                            <FloatingInput label="Job Title" />
                            <FloatingInput label="Company Name" />
                            <FloatingSelect label="Services Required" />

                            <div className="md:col-span-2">
                                <FloatingTextarea label="Message" />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="md:col-span-2 text-center"
                            >
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition">
                                    Send Message
                                </button>
                            </motion.div>

                        </form>
                    </motion.div>
                </section>

            </div>
        </div>
    );
}



function FloatingInput({ label, type = "text" }) {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder=" "
                className="peer w-full border border-white/30 bg-transparent text-white rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="absolute left-3 top-3 text-gray-300 text-sm transition-all 
                peer-placeholder-shown:top-3 
                peer-placeholder-shown:text-sm
                peer-focus:top-1 peer-focus:text-xs
                peer-focus:text-blue-400
                peer-not-placeholder-shown:top-1 
                peer-not-placeholder-shown:text-xs">
                {label}
            </label>
        </div>
    );
}

function FloatingTextarea({ label }) {
    const [value, setValue] = useState("");

    return (
        <div className="relative">
            <textarea
                rows="4"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
                className={`absolute left-3 transition-all bg-white px-1 text-gray-500
        ${value
                        ? "top-1 text-xs"
                        : "top-3 text-sm peer-focus:top-1 peer-focus:text-xs"
                    }`}
            >
                {label}
            </label>
        </div>
    );
}

function FloatingSelect({ label }) {
    const [value, setValue] = useState("");

    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled hidden></option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Mobile Apps</option>
            </select>

            <label
                className={`absolute left-3 transition-all bg-white px-1 text-gray-500
        ${value
                        ? "top-1 text-xs"
                        : "top-3 text-sm peer-focus:top-1 peer-focus:text-xs"
                    }`}
            >
                {label}
            </label>
        </div>
    );
}