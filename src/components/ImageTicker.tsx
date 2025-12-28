"use client";

import React, { useRef, useEffect, useState } from "react";

const images = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
];

const ImageTicker = () => {
  const imageSetRef = useRef<HTMLDivElement>(null);
  const [imageSetWidth, setImageSetWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
      if (imageSetRef.current) {
        // Get the actual rendered width of one ImageSet, including its gaps
        setImageSetWidth(imageSetRef.current.offsetWidth);
      }
    };

    // Calculate width initially
    calculateWidth();

    // Recalculate on window resize
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  // Component to render a single set of images with their internal gaps
  const ImageSet = ({ setRef }: { setRef?: React.RefObject<HTMLDivElement> }) => (
    <div ref={setRef} className="flex gap-x-4 flex-shrink-0">
      {images.map((src, index) => (
        <div key={index} className="w-[90vw] h-[60vh]">
          <img
            src={src}
            alt={`Ticker Image ${index + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-lg" // Changed to object-contain
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full overflow-hidden py-8 bg-gray-950">
      <div
        className="flex animate-ticker"
        style={{ "--image-set-width": `${imageSetWidth}px` } as React.CSSProperties}
      >
        <ImageSet setRef={imageSetRef} />
        <ImageSet />
      </div>
    </section>
  );
};

export default ImageTicker;