"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiFilmReel } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa";
import { RiCodeBoxFill, RiTriangleFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

const ProjectCard = ({
  id,
  imageDev,
  name,
  nameSociete,
  role,
  desc,
  linkSociete,
  liveSite,
  codeGitlab,
  iconLists = ["/images/re.svg", "/images/node-js.svg"],
}) => {
  const [activeCard, setActiveCard] = useState("dev");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0px 12px 30px rgba(0,0,0,0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-auto rounded"
    >
      {/* Dev */}
      {activeCard === "dev" && (
        <div className="max-w-[400px] p-4 rounded-xl shadow-lg bg-white transition-all duration-300">
          <div className="relative overflow-hidden rounded-md aspect-[16/9]">
            <img
              src={imageDev}
              alt="image"
              className="w-full h-[200px] rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-start gap-4 mt-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-left font-semibold text-lg sm:text-xl">
                  {name}
                </h3>

                {nameSociete && (
                  <Link
                    href={linkSociete}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-sm text-Primary hover:underline">
                      {nameSociete}
                    </p>
                  </Link>
                )}
              </div>

              {nameSociete && role && (
                <p className="text-sm text-gray-500 italic">Role: {role}</p>
              )}
              <p className="text-sm text-gray-700">{desc}</p>

              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-gray-200 shadow-sm rounded-full bg-white w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index * 2}px)`,
                    }}
                  >
                    <img src={icon} alt={icon} className="p-2" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-start w-full mt-3 gap-2">
                <Link href={liveSite}>
                  <div className="flex items-center gap-1 text-sm text-blue-600 cursor-pointer hover:underline">
                    <p>Live Site</p>
                    <PiFilmReel />
                  </div>
                </Link>
                <Link href={codeGitlab}>
                  <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer hover:underline">
                    <p>Code</p>
                    <FaCodeBranch />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
