"use client";

import allSkills from "../api/skills/route";

const ScrollingSkills = ({
  skills = allSkills,
  showName = true,
  showPercentage = true,
}) => {
  return (
    <div
      className="
        w-full py-6 bg-white rounded-xl 
        overflow-x-auto md:overflow-hidden
        scrollbar-hide
      "
    >
      <div
        className="
          flex items-center justify-center gap-4 w-max
          md:animate-scroll
        "
      >
        {[...skills, ...skills].map(
          ({ id, name, icon: Icon, percentage, color }, index) => (
            <div
              key={`${id}-${index}`}
              className="flex flex-col items-center justify-center min-w-[100px]"
            >
              <Icon
                size={40}
                color={color}
                className="hover:opacity-80 transition-opacity"
              />
              {showName && <span className="text-sm font-medium">{name}</span>}
              {showPercentage && (
                <span className="text-xs text-gray-500">{percentage}%</span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ScrollingSkills;
