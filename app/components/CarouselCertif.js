"use client";

import React, { useEffect, useState } from "react";
import CertifCard from "./CertifCard";

const CarouselCertif = () => {
  const [certfications, setSertfication] = useState([]);

  useEffect(() => {
    fetch("/api/certfication")
      .then((response) => response.json())
      .then((data) => setSertfication(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      {certfications.map((certfication) => (
        <CertifCard key={certfication.id} {...certfication} />
      ))}
    </div>
  );
};

export default CarouselCertif;
