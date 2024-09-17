"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

interface VideoButtonProps {
  children: React.ReactNode;
  videoSrc: string;
  className?: string;
}

const VideoButton = ({ children, videoSrc, className }: VideoButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-10 px-8 py-8 overflow-hidden shadow-lg hover:shadow-xl dark:shadow-white/20 dark:hover:shadow-white/30",
        isPressed && "scale-95",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-50" : "opacity-0"
        }`}
      >
        <video
          className="object-cover w-full h-full"
          src={videoSrc}
          loop
          muted
          playsInline
          autoPlay
        />
      </div>
    </button>
  );
};

export default VideoButton;
