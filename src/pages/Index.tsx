"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageTicker from "@/components/ImageTicker"; // Import the new component
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ImageTicker /> {/* Add the ImageTicker here */}
      {/* Future sections will go here */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800 p-8">
        <h2 className="text-5xl font-bold">About Section Placeholder</h2>
      </section>
      <section id="work" className="min-h-screen flex items-center justify-center bg-gray-700 p-8">
        <h2 className="text-5xl font-bold">Work Section Placeholder</h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800 p-8">
        <h2 className="text-5xl font-bold">Contact Section Placeholder</h2>
      </section>
      <MadeWithDyad />
    </div>
  );
};

export default Index;