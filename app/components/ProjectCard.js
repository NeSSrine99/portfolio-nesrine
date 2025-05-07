"use client";

import React, { useState } from "react";
import Button from "./Button";
import { PiFilmReel } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({
  id,
  imageDev = "/images/mohsen-taheri-fZRsSiTCAR4-unsplash.jpg",
  imageFigma = "/images/mohsen-taheri-fZRsSiTCAR4-unsplash.jpg",
  name = "Project Name",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  liveSite = "https://www.emc.mc/",
  codeGitlab = "https://gitlab.com/devopsproject7692523/farmaconnect.git",
}) => {
  const [activeCard, setActiveCard] = useState("dev");

  return (
    <div className="relative max-w-[400px] min-w-[280px]">
      {/* الأزرار */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-4 z-10">
        <Button variant="third" onClick={() => setActiveCard("dev")}>
          Dev
        </Button>
        <Button variant="third" onClick={() => setActiveCard("figma")}>
          Figma
        </Button>
      </div>

      {/* كارد Dev */}
      {activeCard === "dev" && (
        <div className="w-full max-w-[400px] min-w-[280px] p-4 rounded-xl shadow-lg bg-white mx-auto sm:mx-0 mt-10">
          <div className="relative overflow-hidden rounded-md">
            <img
              src={imageDev}
              alt="image"
              className="w-full object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col items-center justify-start gap-4 mt-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="text-left font-semibold text-lg sm:text-xl">
                {name}
              </h3>
              <p className="text-sm text-gray-700">{desc}</p>

              <div className="flex flex-wrap items-center gap-3 mt-2">
                <img
                  src="/images/js.svg"
                  alt="JS"
                  className="w-[35px] h-[35px]"
                />
                <img
                  src="/images/next.svg"
                  alt="Next.js"
                  className="w-[35px] h-[35px]"
                />
                <img
                  src="/images/react.svg"
                  alt="React"
                  className="w-[35px] h-[35px]"
                />
                <img
                  src="/images/Skills.svg"
                  alt="Skills"
                  className="w-[35px] h-[35px]"
                />
                <img
                  src="/images/strapi.svg"
                  alt="Strapi"
                  className="w-[35px] h-[35px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-3 gap-2 sm:gap-0">
                <Link href={liveSite}>
                  <div className="flex items-center gap-1 text-sm text-blue-600 cursor-pointer">
                    <p>Live Site</p>
                    <PiFilmReel />
                  </div>
                </Link>
                <Link href={codeGitlab}>
                  <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
                    <p>Code on GitLab</p>
                    <FaCodeBranch />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* كارد Figma */}
      {activeCard === "figma" && (
        <div className="w-full max-w-[400px] min-w-[280px] p-4 rounded-xl shadow-lg bg-white mx-auto sm:mx-0 mt-10">
          <div className="relative overflow-hidden rounded-md">
            <img
              src={imageFigma}
              alt="image"
              className="w-full object-cover rounded-md h-[300px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center w-full mt-3 gap-2 sm:gap-0">
            <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
              <p>Code on GitLab</p>
              <FaCodeBranch />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
