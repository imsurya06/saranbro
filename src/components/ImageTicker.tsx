"use client";

import React from "react";

const images = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
];

const ImageTicker = () => {
  // Duplicate images once to create a seamless loop with -50% translation
  const tickerImages = [...images, ...images]; 

  return (
    <section className="w-full overflow-hidden py-8 bg-gray-950">
      {/* The container for all images, with gap-x applied directly */}
      <div className="flex animate-ticker gap-x-8">
        {tickerImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64">
            <img
              src={src}
              alt={`Ticker Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageTicker;