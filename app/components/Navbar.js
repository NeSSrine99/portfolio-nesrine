"use client";

import Link from "next/link";
import { useState } from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FiAlignRight } from "react-icons/fi";
import Button from "./Button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between w-full text-white px-4 pt-4"
    >
      <div className="flex items-center gap-2">
        <TbDeviceDesktopCode size={36} />
        <div>
          <p className="font-bold text-lg">Nesrine Nasri</p>
          <p className="text-sm opacity-75">Web Developer | Designer</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        <Link href="#about" className="hover:text-cyan-400 transition">
          About
        </Link>
        <Link href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </Link>
        <Link href="#services" className="hover:text-cyan-400 transition">
          Services
        </Link>
        <Link href="#testimonials" className="hover:text-cyan-400 transition">
          Testimonials
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FiAlignRight size={28} />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 flex flex-col gap-2"
        >
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#services">Services</Link>
          <Link href="#testimonials">Testimonials</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
