"use client";

import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

import CertifCard from "./CertifCard";
import Certifications from "../data/certifications";

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1;

  // احصل على الشهادات المرئية فقط
  const visibleCertifications = Certifications.slice(
    startIndex,
    startIndex + visibleCount
  );

  const canGoNext = startIndex + visibleCount < Certifications.length;
  const canGoBack = startIndex > 0;

  return (
    <div className="relative flex items-center justify-center py-4 sm:px-1 border-2 rounded-2xl max-w-[200px] ">
      {/* أزرار التنقل */}
      {canGoBack && (
        <button
          onClick={() => setStartIndex(startIndex - 1)}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10"
        >
          <CiCircleChevLeft size={28} />
        </button>
      )}
      {canGoNext && (
        <button
          onClick={() => setStartIndex(startIndex + 1)}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10"
        >
          <CiCircleChevRight size={28} />
        </button>
      )}

      {/* البطاقات */}
      <div className="flex gap-4 px-4">
        {visibleCertifications.map((certification) => (
          <CertifCard
            key={certification.id}
            {...certification} // مرر كل خصائص الشهادة كـ props
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
