"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({
  name = "Sarah Johnson",
  title = "Product Manager at TechCorp",
  image = "/images/user.jpg",
  testimonial = "Working with this team has been an incredible experience. Their attention to detail and passion for quality really stands out.",
}) => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Border Gradient Animation Circle */}
      <div className="relative rounded-2xl p-[2px]">
        {/* متحرك: دوران الـ border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl z-0"
          style={{
            padding: "2px",
            background:
              "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          // animate={{ rotate: 360 }}
          // transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />

        <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <FaQuoteLeft className="absolute top-0 left-10 -translate-y-1/2 text-Primary text-xl z-50" />

          <div className="flex items-center gap-4 mb-4">
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover border-2 border-Primary"
            />
            <div>
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>

          <div className="pl-6 text-gray-700 text-sm leading-relaxed">
            {testimonial}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
