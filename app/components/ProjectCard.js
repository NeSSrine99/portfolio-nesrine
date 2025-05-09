"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { PiFilmReel } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa";
import Skills from "./Skills";
import allSkills from "../api/skills/route";

const ProjectCard = ({
  id,
  imageDev,
  imageFigma,
  name,
  desc,
  liveSite,
  codeGitlab,
  skills, // إضافة skills كـ prop
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
                {/* عرض المهارات هنا */}
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
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
