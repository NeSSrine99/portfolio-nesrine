"use client";

import Link from "next/link";
import React, { useState } from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FiAlignRight } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-end justify-between pb-8 text-white  w-full relative">
      {/* Logo and title */}
      <div className="flex items-center justify-center py-2">
        <TbDeviceDesktopCode size={50} />
        <div className="ml-2">
          <p className="font-bold ">Nesrine Narsi</p>
          <p className="text-sm">Software Developer | Designer</p>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="md:flex items-end justify-end hidden">
        <div className="flex items-center justify-end pb-2.5">
          <Link href="">
            <Button variant="third" className="text-white">
              About
            </Button>
          </Link>
          <Link href="">
            <Button variant="third">Projects</Button>
          </Link>
          <Link href="">
            <Button variant="third">Services</Button>
          </Link>
          <Link href="">
            <Button variant="third">Testimonial</Button>
          </Link>
        </div>
        <div className="pb-2.5">
          <Button className="flex items-center justify-end gap-2">
            Send Email
            <CiMail size={20} />
          </Button>
        </div>
      </div>

      {/* Burger button (Mobile) */}
      <div className="absolute top-4 right-6 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FiAlignRight size={40} />
        </button>
      </div>

      {/* Dropdown menu (Mobile) */}
      {menuOpen && (
        <div className="absolute top-20 right-4 flex flex-col items-end justify-end gap-4 md:hidden bg-white  p-4 rounded-md shadow-md z-50">
          <div className="flex flex-col items-end justify-end pb-2.5 gap-2">
            <Link href="">
              <Button variant="third">About</Button>
            </Link>
            <Link href="">
              <Button variant="third">Projects</Button>
            </Link>
            <Link href="">
              <Button variant="third">Services</Button>
            </Link>
            <Link href="">
              <Button variant="third">Testimonial</Button>
            </Link>
          </div>
          <div className="pb-2.5">
            <Button className="flex items-center justify-end gap-2">
              Send Email
              <CiMail size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
