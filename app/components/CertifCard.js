"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertifCard = ({
  id,
  image = "/images/Cute.jpg",
  title = "Front-End",
  platform = "Coursera",
  date = "12/06/2024",
  link = "https://coursera.org/verify/LUJ6WYL6XGRE",
}) => {
  return (
    <div className="relative max-w-[200px] max-h-[200px]  w-full overflow-hidden  group  hover:shadow-xl transition-shadow duration-300 border-2b ring-2 ring-Primary ">
      {/* صورة الشهادة */}
      <img
        src={image}
        alt={title}
        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* the information over */}
      <div className="absolute inset-0 bg-Primary bg-opacity-90 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4 space-y-2  top-0 bottom-0">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{platform}</p>
        <p className="text-xs">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-blue-300 flex items-center gap-1 hover:text-blue-400"
        >
          View Certificate <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default CertifCard;
