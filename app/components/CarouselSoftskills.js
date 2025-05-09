"use client";

import { useState } from "react";
import softSkills from "../data/page";
import SoftSkillsCard from "./SoftSkills";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

// تأكد من الاسم
// تأكد من استيراد البيانات

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;
  const visibleSkills = softSkills.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative flex items-center justify-center py-4 border-2 rounded-2xl  max-w-[450px] min-w-[350px] bg-purple-950">
      <div className=" flex justify-between items-center mb-2 bg-purple-400">
        <button
          onClick={() => setStartIndex(Math.max(startIndex - 1, 0))}
          className="absolute left-1 top-1/2 "
        >
          <CiCircleChevLeft size={28} color="" />
        </button>
        <button
          onClick={() =>
            setStartIndex(
              Math.min(startIndex + 1, softSkills.length - visibleCount)
            )
          }
          className="absolute right-1  top-1/2"
        >
          <CiCircleChevRight size={28} />
        </button>
      </div>
      <div className="flex gap-4">
        {visibleSkills.map((skill) => (
          <SoftSkillsCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
