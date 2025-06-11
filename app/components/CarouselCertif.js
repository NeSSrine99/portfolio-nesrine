"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CertifCard from "./CertifCard";
import Certifications from "../data/certifications";

const CarouselCertif = () => {
  return (
    <div className="w-[280px]  mx-auto py-4 px-4 relative  rounded bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper custom-swiper"
        style={{ paddingBottom: "30px" }}
      >
        {Certifications.map((certification) => (
          <SwiperSlide
            key={certification.id}
            className="scale-95 transition-transform duration-300 hover:scale-100"
          >
            <div className="shadow-xl  overflow-hidden">
              <CertifCard {...certification} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCertif;
