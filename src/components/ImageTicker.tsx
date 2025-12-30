"use client";

import React, { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";


const images = [
  "/0M1A7814.jpg",
  "/1N5A4639.jpg",
  "/0C8A3294.jpg",
  "/_JPM8546.jpg",
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
    <div ref={setRef} className="flex gap-x-0 flex-shrink-0 items-stretch"> {/* Changed gap-x-2 to gap-x-0 */}
      {images.map((src, index) => (
        <div key={index} className="w-[70vw] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex-shrink-0">
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={src}
                alt={`Ticker Image ${index + 1}`}
                className="w-full h-full object-cover shadow-lg md:shadow-lg cursor-pointer" // Removed rounded-lg and md:rounded-lg
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
    <section className={`w-full overflow-hidden py-0 bg-gray-950`}>
      <div
        className="flex animate-ticker"
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

export default ImageTicker;