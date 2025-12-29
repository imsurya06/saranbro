"use client";

import React, { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const images = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
];

const ImageTicker = () => {
  const imageSetRef = useRef<HTMLDivElement>(null);
  const [imageSetWidth, setImageSetWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <div ref={setRef} className="flex gap-x-2 flex-shrink-0">
      {images.map((src, index) => (
        <div key={index} className="w-[70vw] md:w-[400px] lg:w-[500px]">
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={src}
                alt={`Ticker Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg md:rounded-lg md:shadow-lg cursor-pointer"
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
              <div className="relative">
                <img
                  src={selectedImage || src}
                  alt="Preview"
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
                  <X className="h-6 w-6" />
                </button>
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