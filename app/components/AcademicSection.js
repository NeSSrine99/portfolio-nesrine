"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const academics = [
  {
    title: "Technologie d'information et de communication",
    institution: "Higher Institute of Technological Studies",
    description1: "Proficiency in networks and systems",
    description2: "Skills in web and mobile development",
    description3: "Training in IT project management",
    description4: "Web development: HTML, CSS, JavaScript",
    description5: "Front-End with React and Next.js",
  },
  {
    title: "Certification in Frontend Web Application Development",
    institution: "Training and Promotion Center for Independent Work – Tozeur",
    description1: "Built real-world projects using React, Node.js, and APIs",
    description2: "UI/UX Design",
    description3: "Web integration",
    description4: "Frontend development",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AcademicCard = () => {
  return (
    <section
      className="flex flex-col items-center bg-white shadow px-4 py-12 space-y-12"
      id="academic"
    >
      {academics.map((item, index) => (
        <motion.div
          key={index}
          className="relative   flex   items-start w-full max-w-3xl space-y-6 sm:space-y-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          {/* Vertical Column */}
          <div className="flex flex-col items-center">
            <FaGraduationCap className="w-10 h-10 text-Primary" />
            <div className="w-1 sm:h-40 h-69  bg-gradient-to-b from-purple-500 to-pink-400 mt-3 rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 py-4 px-2">
            <h2 className="text-lg font-bold text-black mb-1">{item.title}</h2>
            <p className="text-gray-600 text-sm italic mb-4">
              {item.institution}
            </p>
            <ul className="text-gray-700 space-y-2 text-sm list-disc list-inside">
              {item.description1 && <li>{item.description1}</li>}
              {item.description2 && <li>{item.description2}</li>}
              {item.description3 && <li>{item.description3}</li>}
              {item.description4 && <li>{item.description4}</li>}
              {item.description5 && <li>{item.description5}</li>}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default AcademicCard;
