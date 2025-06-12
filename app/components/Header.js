"use client";

import React from "react";
import Button from "./Button";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white relative bg-[url('/images/header2.jpeg')] bg-cover bg-center text-white rounded-b-3xl pb-20 lg:h-[600px] sm:h-[400px] ">
      <div className="absolute inset-0 bg-black/50 rounded-b-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl px-4 mx-auto py-8 flex flex-col items-center text-center gap-4"
      >
        <p className="text-sm tracking-wide uppercase ">
          Hello, I'm Nesrine Nasri
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          A passionate Web Developer crafting modern and efficient digital
          experiences.
        </h1>
        <p className="text-lg tracking-widest font-light">
          Let’s build something great together!
        </p>
        <Button variant="secondary">Show My Work</Button>
      </motion.div>
    </header>
  );
};

export default Header;
