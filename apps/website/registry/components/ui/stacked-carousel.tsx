"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: "https://picsum.photos/id/1018/600/400", alt: "Mountain landscape" },
  { src: "https://picsum.photos/id/1015/600/400", alt: "River in a forest" },
  { src: "https://picsum.photos/id/1019/600/400", alt: "Lake and mountains" },
  { src: "https://picsum.photos/id/1021/600/400", alt: "Snowy mountain peak" },
  {
    src: "https://picsum.photos/id/1039/600/400",
    alt: "Waterfall in a forest",
  },
];

export default function ImageStackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96">
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const zIndex =
              (images.length -
                ((currentIndex - index + images.length) % images.length)) %
              images.length;
            const rotation = Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees

            return (
              <motion.div
                key={image.src}
                className="absolute top-0 left-0 w-full h-full"
                style={{ zIndex }}
                initial={
                  isActive
                    ? { x: "100%", rotate: rotation }
                    : { x: 0, rotate: rotation }
                }
                animate={
                  isActive
                    ? { x: 0, rotate: rotation }
                    : { x: 0, rotate: rotation }
                }
                exit={{ x: "-100%", rotate: rotation }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
