"use client";

import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import NoiseOverlay from "./NoiseOverlay";

const SocialSidebar = () => {
  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 -translate-y-1/2 z-50",
        "hidden md:flex flex-col items-center space-y-6",
        "bg-white/10 backdrop-blur-lg rounded-l-full p-4 border border-white/20",
        "transition-all duration-300"
      )}
    >
      <NoiseOverlay className="rounded-l-full" /> {/* Apply noise overlay to match shape */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:blackashsharan@gmail.com"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;