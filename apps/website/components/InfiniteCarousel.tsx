import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface InfiniteCarouselItemProps {
  src: string;
  width: number;
  height: number;
}

const InfiniteCarouselItem: React.FC<InfiniteCarouselItemProps> = ({
  src,
  width,
  height,
}) => (
  <li className="mx-8">
    <Image
      src={src}
      alt={`Logo ${src}`}
      width={width}
      height={height}
      className="object-contain max-w-none filter dark:invert"
    />
  </li>
);

interface InfiniteCarouselProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  itemWidth: number;
  itemHeight: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  direction = "left",
  speed = 30,
  itemWidth,
  itemHeight,
}) => {
  const logoListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logoListRef.current) {
      const clone = logoListRef.current.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      logoListRef.current.parentNode?.insertBefore(
        clone,
        logoListRef.current.nextSibling,
      );
    }
  }, []);

  const animationDirection = direction === "left" ? "normal" : "reverse";
  const animationDuration = `${speed}s`;

  return (
    <div className="w-full mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logoListRef}
        className="flex items-center justify-center md:justify-start"
        style={{
          animation: `scroll ${animationDuration} linear infinite ${animationDirection}`,
        }}
      >
        {images.concat(images).map((src, index) => (
          <InfiniteCarouselItem
            key={index}
            src={src}
            width={itemWidth}
            height={itemHeight}
          />
        ))}
      </ul>
    </div>
  );
};

export default InfiniteCarousel;
