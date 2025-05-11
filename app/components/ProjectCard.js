"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { PiFilmReel } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

const ProjectCard = ({
  id,
  imageDev,
  imageFigma,
  name,
  nameSociete,
  role,
  desc,
  linkSociete,
  liveSite,
  codeGitlab,
  skills,
}) => {
  const [activeCard, setActiveCard] = useState("dev");

  return (
    <div className="relative max-w-[400px] min-w-[280px]">
      {/* الأزرار */}
      <div className="absolute top-6 right-1/2  flex  gap-2 z-10">
        <Button
          variant="third"
          onClick={() => setActiveCard("dev")}
          className={`${
            activeCard === "dev"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : ""
          } p-2 rounded-md`}
        >
          <RiCodeBoxFill size={20} />
        </Button>
        <Button
          variant="third"
          onClick={() => setActiveCard("figma")}
          className={`${
            activeCard === "figma"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : ""
          } flex items-center gap-1 p-2 rounded-md`}
        >
          <CgFigma size={20} />
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
              {/* الاسم والرابط */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full">
                <h3 className="text-left font-semibold text-lg sm:text-xl">
                  {name}
                </h3>

                {nameSociete && (
                  <Link
                    href={linkSociete}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-sm text-purple-600 hover:underline">
                      {nameSociete}
                    </p>
                  </Link>
                )}
              </div>

              {/* الدور داخل الشركة */}
              {nameSociete && role && (
                <p className="text-sm text-gray-500 italic">Role: {role}</p>
              )}

              {/* الوصف */}
              <p className="text-sm text-gray-700">{desc}</p>

              {/* المهارات */}
              <div className="flex flex-wrap items-center gap-1 mt-1">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* الروابط */}
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
            <video
              controls
              width="100%"
              className="w-full object-cover rounded-md h-[300px]"
            >
              <source src={imageFigma} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center w-full mt-3 gap-2 sm:gap-0">
            <Link href={codeGitlab}>
              <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
                <p>Code on GitLab</p>
                <FaCodeBranch />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
