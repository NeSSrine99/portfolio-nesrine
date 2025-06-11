"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

// حركات الأنيميشن
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ListCardService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-Primary text-center my-10"
        id="services"
      >
        Services
      </motion.h1>
      <main className="flex flex-col items-center justify-center py-10  lg:px-20">
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2  lg:gap-4 md:gap-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default ListCardService;
