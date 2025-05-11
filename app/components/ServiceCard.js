import React from "react";

const ServiceCard = ({
  id,
  logo = "designe.svg",
  name = "nom",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
}) => {
  return (
    <div className="flex flex-col  item-center gap-2 justify-center  min-w-64 max-w-72  p-4  rounded-4xl outline-2  outline-zinc-400  shadow-[2px_2px_2px_2px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-center">
        <img src={`/images/${logo}`} alt="design-logo" className="w-11 h-11 " />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <h3 className="text-cyan-700 text-xl font-semibold font-['Roboto']">
          {name}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
