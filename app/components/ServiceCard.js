import React from "react";

const ServiceCard = ({
  id,
  logo = "designe.svg",
  name = "nom",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
}) => {
  return (
    <div className="relative flex flex-col items-start gap-6 border-2 text-left min-w-64 max-w-72  p-7  rounded-4xl bg-white shadow-md">
      <div className="absolute -top-6 left-4 bg-white p-1">
        <img src={`/images/${logo}`} alt="design-logo" className="w-10 h-10" />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
