"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/use-scroll-animation"; // Import the new hook

const ViewAllButton = ({ href = "/works" }: { href?: string }) => {
  // Specify HTMLDivElement as the generic type for the ref
  const { ref, classes } = useScrollAnimation<HTMLDivElement>({ animationClass: 'animate-fadeIn', initialClass: 'opacity-0' }); // Use the hook

  return (
    <div ref={ref} className={`flex justify-center py-4 bg-gray-950 ${classes}`}> {/* Reduced py-8 to py-4 */}
      <Link to={href}>
        <Button className="px-6 py-4 text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors duration-300 flex items-center space-x-2 animate-button-pulse">
          <span>View All</span>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default ViewAllButton;