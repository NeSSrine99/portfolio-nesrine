"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    institution:
      "Training and Promotion Center for Independent Work – Tozeur",
    description1: "Built real-world projects using React, Node.js, and APIs",
    description2: "UI/UX Design",
    description3: "Web integration",
    description4: "Frontend development",
  },
  {
    title: "Certification in CI/CD and DevOps",
    institution: "Le bon développeur – Tunisia",
    description1: "Completed a 45-hour online training program in CI/CD",
    description2: "Worked with Docker and containerization concepts",
    description3: "Learned GitHub Actions for automation workflows",
    description4: "Studied deployment processes and DevOps practices",
  },
  {
    title: "Certification in Backend Web Application Development",
    institution: "UTICA – Fédération Nationale des TIC, Tunisia",
    description1: "Completed a 2-month training program in Laravel backend development",
    description2: "Built and managed backend systems using Laravel and PHP",
    description3: "Worked with databases, APIs, and web application architecture",
    description4: "Learned backend development best practices and deployment fundamentals",
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

export default function AcademicCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = academics.slice(currentIndex, currentIndex + 2);

  const nextSlide = () => {
    if (currentIndex < academics.length - 2) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      className="flex flex-col items-center bg-white  px-4 py-12 rounded-lg shadow-lg overflow-hidden"
      id="academic"
    >
      {/* Cards */}
      <div className="w-full max-w-4xl space-y-10">
        <AnimatePresence mode="wait">
          {visibleCards.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className="flex items-start w-full"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={cardVariants}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <FaGraduationCap className="w-10 h-10 text-purple-500" />

                {index !== visibleCards.length  && (
                  <div className="w-1 h-40 bg-gradient-to-b from-purple-500 to-pink-400 mt-3 rounded-full"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 py-4 px-4">
                <h2 className="text-lg font-bold text-black mb-1">
                  {item.title}
                </h2>

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
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-10">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition disabled:opacity-40"
        >
          <FaChevronLeft className="w-5 h-5 text-purple-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= academics.length - 2}
          className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition disabled:opacity-40"
        >
          <FaChevronRight className="w-5 h-5 text-purple-600" />
        </button>
      </div>
    </section>
  );
}