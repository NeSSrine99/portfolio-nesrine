"use client";

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Services from "/app/api/services/route";

const ListCardService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold text-Primary text-center my-10">
        Services
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:gap-8 md:gap-4 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ListCardService;
