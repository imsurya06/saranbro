"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideographySection from "@/components/VideographySection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const photographyImages = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
  "/DSC03323.JPG",
  "/SHAL4208.JPG",
  "/0C8A3100.JPG",
  "/148A9514.JPG",
  "/055A8314 (1).jpg",
  "/urban-solitude-1.png",
  // Add more photography image paths here
];

const videographyVideos = [
  { vimeoId: "1149860125", title: "First Videography Project" },
  { vimeoId: "1149860178", title: "Second Videography Project" },
  { vimeoId: "1149860280", title: "Third Videography Project" },
];

const Works = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") === "videography" ? "videography" : "photography";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center liquid-glass-text mb-12">
          My Works
        </h1>

        <Tabs defaultValue={initialTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800 text-white rounded-full p-1 mb-12 mx-auto max-w-lg"> {/* Changed mb-8 to mb-12 */}
            <TabsTrigger
              value="photography"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-base sm:text-lg py-2"
            >
              Photography
            </TabsTrigger>
            <TabsTrigger
              value="videography"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-base sm:text-lg py-2 flex items-center justify-center"
            >
              Videography <Link to="/#videography" className="ml-2 text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photography">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photographyImages.map((src, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <img
                      src={src}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
                    <img
                      src={src}
                      alt="Preview"
                      className="w-full h-full object-contain max-h-[80vh]"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videography">
            <VideographySection videos={videographyVideos} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Works;