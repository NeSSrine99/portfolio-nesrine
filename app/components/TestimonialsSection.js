"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

const fetchTestimonials = async () => {
  const res = await fetch("/api/testimonials");
  return res.json();
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials().then(setTestimonials);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What People Say
        </h2>
        <p className="text-gray-500">
          Here are some kind words from our clients
        </p>
      </div>

      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((item) => (
          <motion.div key={item.id} variants={cardVariants}>
            <TestimonialCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
