"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// أنيميشن عام للحاوية
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// أنيميشن لكل عنصر (بطاقة)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ListProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center py-10 lg:px-20"
      id="projects"
    >
      <motion.h1
        className="text-4xl font-semibold text-black text-center my-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured <span className="text-Primary">Projects </span>
      </motion.h1>

      <motion.p
        className="text-center text-gray-500 max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        A selection of my recent work showcasing skills and creativity.
      </motion.p>

      <motion.div
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard {...project} skills={project.skills} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ListProjectCard;
