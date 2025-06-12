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
  link = "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=19-149&t=SA6fhySSrwoMz9JV-1",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-w-[280px] max-w-[350px] h-[200px] mx-auto relative rounded-2xl overflow-hidden border-4 border-Primary bg-white"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Figma Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-0 right-0 z-50 bg-Primary p-3 rounded shadow-md cursor-pointer"
      >
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <FaFigma className="text-white w-5 h-5" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DesignCard;
