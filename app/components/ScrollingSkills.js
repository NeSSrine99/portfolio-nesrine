"use client";

import allSkills from "../api/skills/route";

const ScrollingSkills = ({
  skills = allSkills,
  showName = true,
  showPercentage = true,
}) => {
  return (
    <div className="overflow-hidden w-full py-6  bg-white rounded-xl  ">
      <div className="animate-scroll flex items-center justify-center gap-2 w-max">
        {[...skills, ...skills].map(
          ({ id, name, icon: Icon, percentage, color }, index) => (
            <div
              key={`${id}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px]"
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
