"use client";

import React, { useEffect, useState } from "react";
import DesignCard from "./DesignCard";

const DesignList = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      const res = await fetch("/api/designe");
      const data = await res.json();
      setDesigns(data);
    };
    fetchDesigns();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center py-10 px-4 lg:px-20 ">
      <h1 className="text-4xl font-semibold text-Primary text-center my-10">
        Design
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5 gap-4 ">
        {designs.map((design) => (
          <DesignCard
            key={design.id}
            images={design.images}
            link={design.link}
          />
        ))}
      </div>
    </main>
  );
};

export default DesignList;
