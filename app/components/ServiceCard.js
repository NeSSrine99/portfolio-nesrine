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
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 max-w-sm"
    >
      {/* Icon container */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shadow-md">
        <img src={`/images/${logo}`} alt={name} className="w-8 h-8" />
      </div>

      {/* Title */}
      <h3 className="text-center text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition duration-300">
        {name}
      </h3>

      {/* Description */}
      <p className="text-center text-sm text-gray-500 mt-3 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default ElegantServiceCard;
