"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertifCard = ({
  id,
  image = "",
  title = "Front-End",
  platform = "Coursera",
  date = "12/06/2024",
  link = "https://coursera.org/verify/LUJ6WYL6XGRE",
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = (e) => {
    // Ignore clicks on links or their children
    if (e.target.tagName.toLowerCase() === "a") return;

    // Only toggle on mobile
    if (window.innerWidth < 768) {
      setShowInfo((prev) => !prev);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className="
        relative max-w-[200px] max-h-[200px] w-full overflow-hidden group 
        hover:shadow-xl transition-shadow duration-300 
       border-2 border-gray-400 ring-2 ring-Primary cursor-pointer select-none
      "
    >
      {/* Certificate image */}
      <img
        src={image}
        alt={title}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Info overlay */}
      <div
        className={`
          absolute inset-0 bg-Primary bg-opacity-90 text-white 
          flex flex-col justify-center items-center text-center p-4 space-y-2 
          transition-opacity duration-300
          ${showInfo ? "opacity-90" : "opacity-0"} 
          md:opacity-0 md:group-hover:opacity-90
        `}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{platform}</p>
        <p className="text-xs">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-blue-300 flex items-center gap-1 hover:text-blue-400 z-10"
        >
          View Certificate <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default CertifCard;
