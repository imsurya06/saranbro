"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const NoiseOverlay = ({ className }: { className?: string }) => {
  // A subtle SVG noise pattern as a data URL
  const noiseSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none rounded-full", // Ensure it covers the parent and matches its border-radius
        className
      )}
      style={{
        backgroundImage: `url("${noiseSvg}")`,
        opacity: 0.05, // Adjust for desired intensity
        mixBlendMode: 'overlay', // Or 'soft-light', 'multiply', 'screen' for different effects
      }}
    />
  );
};

export default NoiseOverlay;