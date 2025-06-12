"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollingSkills from "./ScrollingSkills";
import Carousel from "./CarouselSoftskills";
import CarouselCertif from "./CarouselCertif";
import AcademicSection from "./AcademicSection";

// تعريف الحركة بالـ framer-motion
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// كارت متحرك بدون cn
const CardWrapper = ({ children, index }) => (
  <motion.div
    variants={fadeInUp}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="rounded-3xl p-5 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-white transition hover:shadow-2xl overflow-hidden"
  >
    {children}
  </motion.div>
);

const Grid = () => {
  return (
    <section className="relative px-4 py-14 lg:px-[120px] overflow-hidden">
      {/* Beautiful background gradient and shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-br from-Primary via-pink-400 to-gray-50 opacity-70 blur-2xl rounded-b-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-Primary opacity-20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white text-3xl font-bold mb-12"
      >
        <span className="text-transparent bg-clip-text bg-Primary">
          My Skills & Achievements
        </span>
      </motion.h2>
      <div className="flex flex-col gap-10 ">
        {/* Tech Stack */}

        <ScrollingSkills />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div>
          <AcademicSection />
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Soft Skills */}

          <Carousel />

          {/* Certifications */}

          <CarouselCertif />
        </div>
      </div>
    </section>
  );
};

export default Grid;
