import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-10 mb-10 ">
      <h1 className=" text-Primary text-4xl font-semibold font-['Roboto']  ">
        About Me
      </h1>
      <p className="text-neutral-600 text-xl font-normal  font-['Roboto'] max-w-[800px]">
        Développeur web et designer passionné, je conçois des interfaces
        modernes, fonctionnelles et adaptées aux besoins des utilisateurs.
        Curieux et toujours à l’écoute des nouvelles tendances, je cherche
        constamment à améliorer mes compétences et à relever de nouveaux défis
        créatifs dans le monde du numérique.
      </p>
      <Button variant="third">Download</Button>
    </div>
  );
};

export default About;
