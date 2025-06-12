"use client";
import React from "react";

import { useState } from "react";
import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaChevronUp,
} from "react-icons/fa6";

const Footer = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <footer className="relative w-full pt-4 pb-10 bg-PrimaryHover overflow-hidden">
      {/* ✅ Hidden Panel */}
      {/* <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-Primary shadow-xl rounded-t-3xl transition-all duration-500 z-100 ${
          isPanelOpen ? "h-48" : "h-8"
        }`}
      > */}
      {/* Toggle Icon */}
      {/* <div
          className="flex justify-center items-center cursor-pointer h-8"
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          <FaChevronUp
            className={`text-gray-500 transition-transform ${
              isPanelOpen ? "rotate-180" : ""
            }`}
          />
        </div> */}

      {/* Content */}
      {/* <div
          className={`flex flex-col items-center justify-center px-4 transition-opacity duration-500 ${
            isPanelOpen ? "opacity-100 mt-4" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-gray-700 text-sm mb-3 text-center">
            Want to contact me quickly?
          </p>
          <a href="mailto:nesrinasri99@gmail.com">
            <button className="bg-Primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:brightness-110 transition text-sm">
              Let’s get in touch <FaLocationArrow />
            </button>
          </a>
        </div> */}
      {/* </div> */}

      {/* ✅ Main Footer Content */}
      <div className="flex flex-col items-center text-center z-10 relative">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Let’s <span className="text-Primary">work</span> together!
        </h1>
        <p className="text-gray-600 md:mt-6 my-5 text-base max-w-xl">
          Feel free to contact me for freelance projects, collaborations, or job
          opportunities.
        </p>
        <a href="mailto:nesrinasri99@gmail.com">
          <button className="mt-4 bg-Primary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:brightness-110 transition">
            Let’s get in touch <FaLocationArrow />
          </button>
        </a>
      </div>

      {/* ✅ Footer Bottom */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-6 text-gray-600 gap-6">
        <p className="text-sm md:text-base">&copy; 2024 Nesrin Nasri</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NeSSrine99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={24}
              className="text-xl hover:text-black cursor-pointer transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nesrine-nasri-b6a348244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={24}
              className="text-xl hover:text-blue-600 cursor-pointer transition"
            />
          </a>
          <a
            href="https://gitlab.com/nesrinasri99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab
              size={24}
              className="text-xl hover:text-orange-600 cursor-pointer transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
