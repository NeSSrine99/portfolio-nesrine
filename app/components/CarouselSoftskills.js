"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import softSkills from "../data/page";
import SoftSkillsCard from "./SoftSkills";
import { useRef } from "react";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative py-4 px-4 sm:px-8 max-w-full sm:max-w-[500px] mx-auto ">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute z-10 left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
      >
        <CiCircleChevLeft size={24} className="text-gray-600" />
      </button>
      <button
        ref={nextRef}
        className="absolute z-10 right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
      >
        <CiCircleChevRight size={24} className="text-gray-600 " />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 2,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 12,
            centeredSlides: true,
          },
        }}
        className="px-4 sm:px-6"
      >
        {softSkills.map((skill) => (
          <SwiperSlide key={skill.id}>
            {({ isActive }) => (
              <div
                className={`my-4 transition-all duration-300 relative ${
                  isActive
                    ? "scale-105 sm:scale-110 z-20"
                    : "scale-95 sm:scale-90 opacity-70 z-10"
                }`}
              >
                <SoftSkillsCard skill={skill} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
