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
      <h1 className="text-4xl font-semibold text-black text-center my-10">
        Creative <span className="text-Primary">UI/UX</span> Projects
      </h1>
      <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
        A selection of user interface and web designs I've crafted with focus on
        usability, accessibility, and beauty.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-6 gap-4 ">
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
