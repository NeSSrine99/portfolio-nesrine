import React from "react";
import { motion } from "framer-motion";

const ElegantServiceCard = ({
  logo = "designe.svg",
  name = "Service Name",
  desc = "This is a short description of the service you provide in an elegant and simple way.",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
      className="relative group  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white max-w-sm hover:border-pink-400 "
    >
      {/* Icon container */}
      <div className="absolute  top-0 left-6  -translate-y-1/2 bg-gray-50 px-4">
        <img src={`/images/${logo}`} alt={name} className="w-8 h-8" />
      </div>

      {/* Title */}
      <h3 className="text-start text-lg font-semibold text-gray-800 group-hover:text-pink-400 transition duration-300">
        {name}
      </h3>

      {/* Description */}
      <p className="text-start text-sm text-gray-500 mt-3 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default ElegantServiceCard;
