"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollingSkills from "./ScrollingSkills";
import Carousel from "./CarouselSoftskills";
import CarouselCertif from "./CarouselCertif";

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
    <section className="px-4 py-14 b">
      {/* العنوان المتحرك */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white text-3xl font-bold mb-12"
      >
        <span className="text-transparent bg-clip-text bg-Primary">
          Information
        </span>
      </motion.h2>

      {/* توزيع الكروت */}
      <div className="flex flex-col gap-10 ">
        {/* Tech Stack */}
        <CardWrapper index={1}>
          <h3 className="text-xl font-semibold mb-4 text-pink-500">
            Tech Stack
          </h3>
          <ScrollingSkills />
        </CardWrapper>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Soft Skills */}
          <CardWrapper index={0}>
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Soft Skills
            </h3>
            <Carousel />
          </CardWrapper>

          {/* Certifications */}
          <CardWrapper index={2}>
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Certifications
            </h3>
            <CarouselCertif />
          </CardWrapper>
        </div>
      </div>
    </section>
  );
};

export default Grid;
