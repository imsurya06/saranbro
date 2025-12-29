"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black text-white pt-20 pb-8 md:pt-24 lg:pt-32 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]">
      {/* Contact Title */}
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-center liquid-glass-text pb-4 relative">
          Contact
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-white/50"></span> {/* Underline effect */}
        </h2>
        <p className="text-base md:text-lg text-gray-400 mt-4">
          I will get back to you within 24 hours
        </p>
      </div>

      {/* Bottom Section: Navigation, Copyright, Socials */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-16 md:pt-24 border-t border-gray-700">
        {/* Navigation Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-base md:text-lg">
            Home
          </Link>
          <Link to="/#work" className="text-gray-300 hover:text-white transition-colors text-base md:text-lg">
            Works
          </Link>
          <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors text-base md:text-lg flex items-center">
            Contact <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-0">
          &copy; All project visuals are property of their respective owners.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-full p-2">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-full p-2">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-full p-2">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;