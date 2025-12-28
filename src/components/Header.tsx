"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NoiseOverlay from './NoiseOverlay'; // New import

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Change background after scrolling 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/#work" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4 pb-4 flex justify-end px-4">
      <nav
        className={cn(
          "relative flex items-center justify-between transition-all duration-300",
          "md:w-auto md:max-w-fit rounded-full px-4 py-2 md:px-6 md:py-2",
          scrolled ? "bg-white/10 backdrop-blur-lg" : "bg-transparent backdrop-blur-none"
        )}
      >
        {scrolled && <NoiseOverlay />} {/* Conditionally render NoiseOverlay */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 relative z-10"> {/* Added relative z-10 */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto relative z-10"> {/* Added relative z-10 */}
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-gray-700 w-12 h-12"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:bg-gray-700"
        >
          <X size={24} />
        </Button>
        <div className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl font-semibold hover:text-gray-300 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;