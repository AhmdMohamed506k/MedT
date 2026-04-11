import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




export default function Services() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/*  VIDEO */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={`https://res.cloudinary.com/ddpr0dmzh/video/upload/q_auto/f_auto/v1775944112/4KBlueBackGround_mvgiwr.mp4`} type="video/mp4" />
      </video>

       {/* GRADIENT GLOW OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black/80" />

      {/* LIGHT EFFECT */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We craft high-end digital experiences with precision and creativity.
          </motion.p>
        </section>

        {/* SERVICES */}
        <div className="space-y-32 px-6 max-w-6xl mx-auto">

          <ServiceSection title="UI/UX Design" />
          <ServiceSection title="Branding & Identity" reverse />
          <ServiceSection title="Development" />

        </div>

        {/* CTA */}
        <section className="py-32">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto text-center 
            bg-white/10 backdrop-blur-xl border border-white/20 
            rounded-2xl p-12 relative overflow-hidden"
          >
            <Glow />

            <h2 className="text-3xl mb-6">
              Let’s Create Something Amazing Together!
            </h2>

            <MagneticButton text="Schedule a Call" />
          </motion.div>
        </section>

      </div>
    </div>
  );
}



function ServiceSection({ title, reverse }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      {/* TEXT */}
      <div className={reverse ? "md:order-2" : ""}>
        <h2 className="text-3xl mb-6 font-semibold">{title}</h2>
        <Accordion />
      </div>

      {/* IMAGE GRID */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`relative grid grid-cols-2 gap-3 ${reverse ? "md:order-1" : ""}`}
      >
        <ImageCard src="https://images.unsplash.com/photo-1559028012-481c04fa702d" />
        <ImageCard src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
        <ImageCard src="https://images.unsplash.com/photo-1553877522-43269d4ea984" />
        <ImageCard src="https://images.unsplash.com/photo-1559028012-481c04fa702d" />
      </motion.div>
    </motion.section>
  );
}


function ImageCard({ src }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative rounded-xl overflow-hidden group"
    >
      <img src={src} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  );
}



function Accordion() {
  const [active, setActive] = useState(0);

  const items = [
    "Strategy & Research",
    "UI Design",
    "UX Optimization",
    "Development",
  ];

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setActive(i)}
            className="flex justify-between w-full py-2"
          >
            {item}
            <motion.span animate={{ rotate: active === i ? 180 : 0 }}>
              ⌄
            </motion.span>
          </button>

          <AnimatePresence>
            {active === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden text-gray-400 text-sm"
              >
                <p className="pt-2">
                  Premium service description goes here.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}



function MagneticButton({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg shadow-xl"
    >
      {text}
    </motion.button>
  );
}



function Glow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-64 h-64 bg-blue-500/20 blur-3xl top-0 left-0" />
      <div className="absolute w-64 h-64 bg-purple-500/20 blur-3xl bottom-0 right-0" />
    </div>
  );
}