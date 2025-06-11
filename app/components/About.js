"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col text-center items-center justify-center gap-10 px-4 py-12 mb-10"
      id="about"
    >
      <motion.h1
        variants={item}
        className="text-Primary text-4xl font-bold font-['Roboto']"
      >
        About Me
      </motion.h1>

      <motion.p
        variants={item}
        className="text-neutral-600 text-lg sm:text-xl font-normal font-['Roboto'] max-w-3xl leading-relaxed"
      >
        I'm Nesrine, a web developer and aspiring UI/UX designer based in
        Tunisia. With a background in development and a growing passion for
        visual design, I enjoy building user-friendly websites using
        technologies like{" "}
        <span className="text-cyan-600 font-medium">Next.js</span> and{" "}
        <span className="text-cyan-600 font-medium">Tailwind CSS</span>. I also
        love exploring tools like{" "}
        <span className="text-purple-600 font-medium">Figma</span> to design
        modern, clean, and accessible interfaces. I'm currently focused on
        meaningful personal projects, improving my skills, and exploring new
        opportunities to grow in tech.
      </motion.p>
    </motion.div>
  );
};

export default About;
