"use client";

import React from "react";
import Button from "./Button";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white relative bg-[url('/images/header2.jpeg')] bg-cover bg-center text-white rounded-b-4xl pb-20 lg:h-[600px] sm:h-[550px] ">
      <div className="absolute inset-0 bg-black/70 rounded-b-4xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center  text-center gap-4 pt-32  px-2 lg:px-0 max-w-3xl mx-auto"
      >
        <p className="text-sm tracking-wide uppercase ">
          Hello, I'm Nesrine Nasri
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          Creating interactive, high-performance web experiences that inspire
        </h1>
        <p className="text-lg tracking-widest font-light">
          Let’s build something great together!
        </p>
        <Button href="#projects">Show My Work</Button>
      </motion.div>
    </header>
  );
};

export default Header;
