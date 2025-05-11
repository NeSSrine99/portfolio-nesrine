"use client";
import * as Icons from "react-icons/fa";

const SoftSkillsCard = ({ skill }) => {
  const IconComponent = Icons[skill?.icon] || Icons.FaRegHandshake;

  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-48 max-h-48 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
      <div className="text-blue-600 mb-2">{skill.icon}</div>
      <h4 className="font-bold  mb-2 text-center">{skill?.name}</h4>
      <p className="text-sm text-gray-600 text-center">{skill?.description}</p>
    </div>
  );
};

export default SoftSkillsCard;
