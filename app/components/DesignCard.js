"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFigma } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

const DesignCard = ({
  images = [
    "/images/slide1.jpeg",
    "/images/slide2.jpeg",
    "/images/slide3.jpeg",
  ],
  title = "Plantea App",
  subtitle = "UX/UI Mobile App",
  link = "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=19-149&t=SA6fhySSrwoMz9JV-1",
  tools = "Figma • Wireframing • Prototype",
  duration = "2 weeks",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 35px rgba(0,0,0,0.25)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-[350px] h-[250px] mx-auto relative rounded-3xl overflow-hidden border-2 border-gray-200 bg-white"
    >
      {/* Image carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`${title} Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient overlay with info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white rounded-3xl">
        <h3 className="text-xl font-bold drop-shadow-lg">{title}</h3>
        <p className="text-sm text-gray-200">{subtitle}</p>
        <p className="text-xs text-gray-300 mt-1">{tools}</p>
        <p className="text-xs text-gray-300">Duration: {duration}</p>
      </div>

      {/* Figma Button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute top-3 right-3 z-50 bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full shadow-lg cursor-pointer"
        title="View Project on Figma"
      >
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <FaFigma className="text-white w-5 h-5" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DesignCard;
