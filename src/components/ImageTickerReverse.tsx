"use client";

import React, { useRef, useEffect, useState } from "react";

const images = [
  "/DSC03323.JPG",
  "/SHAL4208.JPG",
  "/0C8A3100.JPG",
  "/148A9514.JPG",
];

const ImageTickerReverse = () => {
  const imageSetRef = useRef<HTMLDivElement>(null);
  const [imageSetWidth, setImageSetWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
      if (imageSetRef.current) {
        setImageSetWidth(imageSetRef.current.offsetWidth);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  const ImageSet = ({ setRef }: { setRef?: React.RefObject<HTMLDivElement> }) => (
    <div ref={setRef} className="flex gap-x-2 flex-shrink-0">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-[70vw] h-[40vh] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px]"
        >
          <img
            src={src}
            alt={`Ticker Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg md:rounded-lg md:shadow-lg"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full overflow-hidden py-0 bg-gray-950">
      <div
        className="flex animate-ticker-reverse"
        // Using the new reverse animation
        style={
          {
            "--image-set-width": `${imageSetWidth}px`,
          } as React.CSSProperties
        }
      >
        <ImageSet setRef={imageSetRef} />
        <ImageSet />
      </div>
    </section>
  );
};

export default ImageTickerReverse;