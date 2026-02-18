"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ImageIcon, VideoIcon, Film, ChevronDown, Instagram } from "lucide-react"; // Added Instagram icon
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideographySection from "@/components/VideographySection";
import ReelsGrid from "@/components/ReelsGrid"; // Import the new ReelsGrid component
import { cn } from "@/lib/utils"; // Import cn for conditional classNames
import { Button } from "@/components/ui/button"; // Import Button component


const photographyImages = [
  "/0C8A1432.jpg",
  "/0C8A3100.jpg",
  "/0C8A3294.jpg",
  "/0C8A3317.jpg",
  "/0C8A3331.jpg",
  "/0C8A3448.jpg",
  "/0M1A0153.jpg",
  "/0M1A7814.jpg",
  "/0M1A7854.jpg",
  "/148A9497.jpg",
  "/148A9514.jpg",
  "/1N5A4639.jpg",
  "/1N5A5797.jpg",
  "/20230122064134__MG_9377-2.jpg",
  "/20230122064208__MG_9378-2.jpg",
  "/20231112200019_3U9A0437.jpg",
  "/20231227000305_0C8A2880-2.jpg",
  "/20231227001246_0C8A2928-2.jpg",
  "/20231227001453_0C8A2943-2.jpg",
  "/20231227002110_0C8A2977-2.jpg",
  "/20240212121351_0C8A1453-2.jpg",
  "/20240212121405_0C8A1455-2.jpg",
  "/20240212195112_0C8A3670-2.jpg",
  "/2W5A1246.jpg",
  "/3U9A0382.jpg",
  "/3U9A6874.jpg",
  "/3U9A9111.jpg",
  "/DSC00872.jpg",
  "/DSC00890.jpg",
  "/DSC00975.jpg",
  "/DSC03323.jpg",
  "/DSC08201.jpg",
  "/DSC08204.jpg",
  "/DSC08226.jpg",
  "/DSC_9058.jpg",
  "/DSC_9067.jpg",
  "/IMG_0161.jpg",
  "/Jenolin Bride.jpg",
  "/SHA02338.jpg",
  "/SHA05894.jpg",
  "/SHA06163.jpg",
  "/SHA06165.jpg",
  "/SHA08273.jpg",
  "/SHA08322.jpg",
  "/SHA08619.jpg",
  "/SHAL4208.jpg",
  "/_JPM8546.jpg"
];

const videographyVideos = [
  { src: "https://drive.google.com/file/d/1pdQiu9TqUWiI2Tu0evlW0TZoTm1Vhnuv/preview", title: "First Google Drive Video" },
  { src: "https://drive.google.com/file/d/1qDRnO5Ibj3VmDUkLnyGLY-rsVr3bpMaV/preview", title: "Second Google Drive Video" },
  { src: "https://drive.google.com/file/d/14hLTsXBGBENiEoAdmfmDsRMWctZ3OTCK/preview", title: "Third Google Drive Video" },
  { src: "https://drive.google.com/file/d/10TuBPro-0givS0BsN9StoxYpiaU8r_D_/preview", title: "Google Drive Video" },
  { src: "https://drive.google.com/file/d/1Hx_pW1sotGI5zBTfSBEWaMaHSCL0pLx4/preview", title: "Another Google Drive Video" },
  { src: "https://drive.google.com/file/d/1IMPrl3htZwgTtD_AFc8LhfLLgjsP9qFB/preview", title: "Last Google Drive Video" },
  { src: "https://drive.google.com/file/d/1JtP4ShVqfNibeeluhQHM4Xj3KGr2vl20/preview", title: "New Google Drive Video" },
  { src: "https://drive.google.com/file/d/1DznzpDRkhNNFTlVqYpwPyYL3geiflrGi/preview", title: "Latest Google Drive Video" },
  { src: "https://drive.google.com/file/d/1ssQxSYnjt_r6SXnpQSO7TZB9-n3sV8Q8/preview", title: "Another New Google Drive Video" },
  { src: "https://drive.google.com/file/d/1HnlEr7r6MKXCh1nVck-k0PLdirGO6uJs/preview", title: "Yet Another Google Drive Video" },
  { src: "https://drive.google.com/file/d/1gwZKr4g2hvZtzJGINn6e0vemjZW_NkCN/preview", title: "Newest Google Drive Video" },
  { src: "https://drive.google.com/file/d/1aAEm6tb2uQrXV1P4OYtkMShWNqaN47T0/preview", title: "Another Latest Google Drive Video" },
  { src: "https://drive.google.com/file/d/1mbyk8blTx9UXIbssSd5Fd8cnapVzKANB/preview", title: "New Google Drive Video" },
];

const reelsVideos = [
  { src: "https://drive.google.com/file/d/1ftkrt6_p2diz0yfYqNDEpAh6lYGSPXXp/preview", title: "Reel 1" },
  { src: "https://drive.google.com/file/d/19dmHIeN8aQEE_AR2KXUmDlTBWUwJGi5w/preview", title: "Reel 2" },
  { src: "https://drive.google.com/file/d/1yd4NIsi3huoLh4besHQd2bXLv0wQ7g9M/preview", title: "Reel 3" },
  { src: "https://drive.google.com/file/d/1H6tfEIY-qHyXBlZ0UVAngM-FHHrnZKKo/preview", title: "Reel 4" },
  { src: "https://drive.google.com/file/d/1SoZC5WzyOBhV_QVJ5jLBLRME-7hsOFsn/preview", title: "Reel 5" },
  { src: "https://drive.google.com/file/d/1azR9kBtbCfj5ec9LpMzab0kH9_TQMFqO/preview", title: "Reel 6" },
  { src: "https://drive.google.com/file/d/1Jq9bh-swknJ14aAZvMEBOa-_g3v76jBY/preview", title: "Reel 7" },
  { src: "https://drive.google.com/file/d/16xF4GJLmQRbqHnLfWiMhngbwXQEOoyTE/preview", title: "Reel 8" },
];

const Works = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [activeTab, setActiveTab] = useState<"photography" | "videography">(
    queryParams.get("tab") === "videography" ? "videography" : "photography"
  );
  const [selectedVideographySubTab, setSelectedVideographySubTab] = useState<"videos" | "reels">(
    queryParams.get("tab") === "videography" && queryParams.get("subtab") === "reels"
      ? "reels"
      : "videos"
  );

  useEffect(() => {
    const tab = queryParams.get("tab");
    const subtab = queryParams.get("subtab");

    if (tab === "videography") {
      setActiveTab("videography");
      if (subtab === "reels") {
        setSelectedVideographySubTab("reels");
      } else {
        setSelectedVideographySubTab("videos");
      }
    } else {
      setActiveTab("photography");
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className={`pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center liquid-glass-text mb-20 py-4">
          My Works
        </h1>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "photography" | "videography")} className="w-full">
          <TabsList className="grid w-full h-fit grid-cols-2 bg-gray-900/50 text-white rounded-full p-2 mb-8 mx-auto max-w-lg overflow-visible backdrop-blur-lg border border-white/10">
            <TabsTrigger
              value="photography"
              className="transition-all duration-300 ease-in-out data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-base sm:text-lg py-2 data-[state=active]:backdrop-blur-sm data-[state=active]:border data-[state=active]:border-white/20 flex items-center justify-center space-x-2"
            >
              <ImageIcon className="h-5 w-5" />
              <span>Photography</span>
            </TabsTrigger>

            <TabsTrigger
              value="videography"
              className={cn(
                "transition-all duration-300 ease-in-out rounded-full text-base sm:text-lg py-2 flex items-center justify-center space-x-2",
                activeTab === "videography"
                  ? "bg-white/10 text-white shadow-sm backdrop-blur-sm border border-white/20"
                  : "text-white/70 hover:text-white"
              )}
              asChild
            >
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center justify-center space-x-2 w-full h-full focus-visible:outline-none rounded-full",
                    activeTab === "videography"
                      ? "bg-white/10 text-white shadow-sm backdrop-blur-sm border border-white/20"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  <Film className="h-5 w-5" />
                  <span>Videography</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border border-white/20 text-white rounded-lg p-1">
                  <DropdownMenuItem
                    onClick={() => {
                      setActiveTab("videography");
                      setSelectedVideographySubTab("videos");
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white/10",
                      selectedVideographySubTab === "videos" && "bg-white/10"
                    )}
                  >
                    <VideoIcon className="h-4 w-4" />
                    <span>Videos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setActiveTab("videography");
                      setSelectedVideographySubTab("reels");
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white/10",
                      selectedVideographySubTab === "reels" && "bg-white/10"
                    )}
                  >
                    <Film className="h-4 w-4" />
                    <span>Reels</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photography">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2"> {/* Changed gap-4 to gap-2 */}
              {photographyImages.map((src, index) => (
                <div key={index} className="break-inside-avoid-column mb-2"> {/* Changed mb-4 to mb-2 */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={src}
                        alt={`Photography ${index + 1}`}
                        className="w-full h-auto object-cover shadow-lg md:shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        loading="lazy" // Added lazy loading
                        decoding="async" // Added async decoding
                        width="600" // Placeholder width
                        height="400" // Placeholder height
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
                      <img
                        src={src}
                        alt="Preview"
                        className="w-full h-full object-contain max-h-[80vh]"
                        loading="lazy" // Added lazy loading
                        decoding="async" // Added async decoding
                        width="600" // Placeholder width
                        height="400" // Placeholder height
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
            {/* "View more on my Instagram" button */}
            <div className="flex justify-center py-8">
              <a
                href="https://www.instagram.com/_sharan_19__/" // Replace with your actual Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base sm:text-lg md:text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-2 px-6 py-4 sm:px-8 sm:py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20 duration-300 animate-button-pulse"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>View more on my Instagram</span>
              </a>
            </div>
          </TabsContent>

          <TabsContent
            value="videography"
            className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[200px] xl:-mx-[200px]"
          >
            {selectedVideographySubTab === "videos" ? (
              <VideographySection videos={videographyVideos} showTitle={false} />
            ) : (
              <ReelsGrid videos={reelsVideos} />
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Works;