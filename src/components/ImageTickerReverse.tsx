"use client";

import React, { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const images = [
  "/DSC08201.jpg",
  "/0C8A1432.jpg",
  "/0C8A3317.jpg",
  "/0C8A3448.jpg",
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
    <div ref={setRef} className="flex gap-x-2 flex-shrink-0 items-stretch">
      {images.map((src, index) => (
        <div key={index} className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex-shrink-0 flex items-center justify-center"> {/* Removed fixed width, added flex centering */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={src}
                alt={`Ticker Image ${index + 1}`}
                className="h-full w-auto object-contain rounded-lg shadow-lg md:rounded-lg md:shadow-lg cursor-pointer" // Changed w-full to w-auto and object-cover to object-contain
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
              <div className="relative">
                <img
                  src={src}
                  alt="Preview"
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                {/* Removed the custom close button */}
              </div>
            </DialogContent>
          </Dialog>
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