"use client";

import Image from "next/image";
import { useLayoutEffect } from "react";
import React, { SVGProps, useState, useRef, useEffect } from "react";

type ImageTooltipProps = {
  text: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  hoverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const ImageTooltip: React.FC<ImageTooltipProps> = ({
  Icon,
  text,
  hoverImage,
}: ImageTooltipProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);
  const hoverContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (linkRef.current && hoverContentRef.current) {
        const linkRect = linkRef.current.getBoundingClientRect();
        const hoverRect = hoverContentRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - linkRect.left,
          y: e.clientY - linkRect.top - hoverRect.height - 10,
        });
      }
    };

    if (isHovering) {
      document.addEventListener("mousemove", handleMouseMove);
      if (!hoverImage || isImageLoaded) {
        setTimeout(() => setIsVisible(true), 50);
      }
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      setIsVisible(false);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, isImageLoaded, hoverImage]);

  useEffect(() => {
    if (!isHovering) {
      setIsImageLoaded(false);
    }
  }, [isHovering]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    if (isHovering) {
      setIsVisible(true);
    }
  };

  return (
    <div
      ref={linkRef}
      className={`inline-flex justify-center items-center mx-[4px] font-bold hover:cursor-pointer ${
        Icon ? "pb-1" : ""
      } rounded-none w-fit border-b border-black/30 dark:border-white/30 dark:hover:border-white/90 hover:border-black/90 transition-colors duration-500 relative`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {Icon && <Icon className="mr-1" />}
      {text}
      {isHovering && hoverImage && (
        <div
          ref={hoverContentRef}
          className={`absolute dark:bg-[#111111] bg-[#FFFFFF] border-[#e6e6e6] border dark:border-[#333333] rounded shadow-md z-10 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: hoverImage ? `${hoverImage.width}px` : "auto",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          {hoverImage && (
            <Image
              src={hoverImage.src}
              alt={hoverImage.alt}
              width={hoverImage.width}
              height={hoverImage.height}
              className="rounded"
              onLoad={handleImageLoad}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ImageTooltip;
