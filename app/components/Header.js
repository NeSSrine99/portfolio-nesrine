import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap lg:justify-between justify-center gap-4 items-center bg-[url(/images/violette.jpg)] bg-cover bg-center  pt-24 pb-16 rounded-b-[50px] lg:px-40 shadow-2xl">
      <div className=" max-w-[600px] min-w-[250px] text-center lg:text-left">
        <p className=" text-white text-xl font-medium font-['Roboto']">
          Hello, I'm Nesrin Nasri
        </p>
        <h1 className="justify-start text-white text-4xl font-medium font-['Roboto']">
          A passionate Web Developer crafting modern and efficient digital
          experiences.
        </h1>
        <p className=" justify-center text-white text-2xl font-medium font-['Roboto'] tracking-[7.20px]">
          {" "}
          Let’s build something great together!
        </p>
      </div>
      <div className="w-96 h-96 max-w-96 min-w-64 p-2.5 bg-gradient-to-bl from-white/50 to-fuchsia-800/50 rounded-full inline-flex justify-start items-center gap-2.5 opacity-90">
        <img src="/images/moi.png" alt="moi" className="flex-1 self-stretch" />
      </div>
    </div>
  );
};

export default Header;
