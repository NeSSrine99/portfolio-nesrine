"use client";

import Link from "next/link";
import { useState } from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";

import { FiAlignRight } from "react-icons/fi";

import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between w-full text-white bg-Primary px-4 py-4"
    >
      <div className="flex items-center gap-2">
        <TbDeviceDesktopCode size={40} className="text-white" />

        <div>
          <p className="font-bold ">Nesrine Nasri</p>
          <p className="text-sm ">Web Developer | Designer</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        <Link
          href="#about"
          className="transition hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="transition hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          Projects
        </Link>
        <Link
          href="#services"
          className="transition hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          Services
        </Link>
        <Link
          href="#testimonials"
          className="transition hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          Testimonials
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-white cursor-pointer focus:outline-none"
        >
          <FiAlignRight size={28} />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-18 right-0 left-0 bg-Primary text-white p-4 rounded-lg shadow-lg z-50 flex flex-col gap-2"
        >
          <Link
            href="#about"
            className="transition hover:underline hover:decoration-2 hover:underline-offset-4 "
          >
            About
          </Link>
          <Link
            href="#projects"
            className="transition hover:underline hover:underline-offset-4 "
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="transition hover:underline hover:underline-offset-4 "
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="transition hover:underline hover:underline-offset-4 "
          >
            Testimonials
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
