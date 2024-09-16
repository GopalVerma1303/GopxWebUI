"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StackedCarouselProps {
  images: string[];
  width?: number;
  height?: number;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
}

const StackedCarousel: React.FC<StackedCarouselProps> = ({
  images,
  width = 300,
  height = 400,
  borderColor = "white",
  borderWidth = 12,
  backgroundColor = "#e0f1fa",
}) => {
  const [order, setOrder] = useState(images.map((_, index) => index));
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const animationQueue = useRef<("left" | "right")[]>([]);

  const moveCard = useCallback(
    (moveDirection: "left" | "right") => {
      if (isMoving) {
        animationQueue.current.push(moveDirection);
        return;
      }

      setIsMoving(true);
      setDirection(moveDirection);

      setTimeout(() => {
        setOrder((prevOrder) => {
          const newOrder = [...prevOrder];
          if (moveDirection === "left") {
            const lastItem = newOrder.pop()!;
            newOrder.unshift(lastItem);
          } else {
            const firstItem = newOrder.shift()!;
            newOrder.push(firstItem);
          }
          return newOrder;
        });

        setIsMoving(false);
        setDirection(null);

        if (animationQueue.current.length > 0) {
          const nextDirection = animationQueue.current.shift()!;
          moveCard(nextDirection);
        }
      }, 300);
    },
    [isMoving],
  );

  const getRotation = (index: number) => {
    const rotations = [0, -10, 10, 20];
    return rotations[index % rotations.length];
  };

  return (
    <div className={`relative w-full max-w-[${width}px] h-[${height}px]`}>
      <div className={`relative w-full h-[${height - 100}px]`}>
        <AnimatePresence>
          {images.map((src, index) => {
            const orderIndex = order.indexOf(index);
            const isTop = orderIndex === order.length - 1;
            const isBottom = orderIndex === 0;
            const isAnimating =
              (direction === "left" && isTop) ||
              (direction === "right" && isBottom);

            return (
              <motion.div
                key={src}
                className={`absolute top-0 left-0 w-full h-[${height - 100}px]`}
                animate={{
                  rotate: isMoving ? 0 : getRotation(orderIndex),
                  x: isAnimating
                    ? direction === "left"
                      ? "-100%"
                      : "100%"
                    : "0%",
                  zIndex: orderIndex,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                  rotate: {
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                    mass: 1,
                  },
                }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className={`rounded-3xl border-[${borderWidth}px] border-${borderColor} object-cover shadow-lg`}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mt-4">
        <button
          onClick={() => moveCard("left")}
          className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={() => moveCard("right")}
          className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default StackedCarousel;
