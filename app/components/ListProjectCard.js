"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ListProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="p-4">
      <h1>List Of Services</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   lg:gap-8 md:gap-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ListProjectCard;
