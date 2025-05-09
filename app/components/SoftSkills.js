"use client";
import * as Icons from "react-icons/fa";

const SoftSkillsCard = ({ skill }) => {
  const IconComponent = Icons[skill?.icon] || Icons.FaRegHandshake;

  return (
    <div className="flex flex-col items-center justify-center p-4 w-48 h-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-blue-600 mb-2">
        <IconComponent size={24} />
      </div>
      <h4 className="font-semibold text-xl mb-2">{skill?.name}</h4>
      <p className="text-sm text-gray-600 text-center">{skill?.description}</p>
    </div>
  );
};

export default SoftSkillsCard;
