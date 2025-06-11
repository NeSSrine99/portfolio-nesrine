"use client";
import * as Icons from "react-icons/fa";

const SoftSkillsCard = ({ skill }) => {
  const IconComponent = Icons[skill?.icon] || Icons.FaRegHandshake;

  return (
    <div className="flex flex-col items-center justify-between p-4 w-48 h-40 bg-white rounded-lg hover:shadow-lg transition-all duration-300 text-center border-2 border-gray-300">
      <div className="text-blue-600 text-3xl mb-2">{skill.icon}</div>
      <h4 className="font-bold text-sm mb-2">{skill?.name}</h4>
      <p className="text-xs text-gray-600 leading-snug line-clamp-3">
        {skill?.description}
      </p>
    </div>
  );
};

export default SoftSkillsCard;
