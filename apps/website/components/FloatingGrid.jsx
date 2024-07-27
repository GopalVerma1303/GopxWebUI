import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const squareData = [
  {
    id: 1,
    src: "/assets/hero/image1.png",
  },
  {
    id: 2,
    src: "/assets/hero/image2.png",
  },
  {
    id: 3,
    src: "/assets/hero/image3.png",
  },
  {
    id: 4,
    src: "/assets/hero/image4.png",
  },
  {
    id: 5,
    src: "/assets/hero/image5.png",
  },
  {
    id: 6,
    src: "/assets/hero/image6.png",
  },
  {
    id: 7,
    src: "/assets/hero/image7.png",
  },
  {
    id: 8,
    src: "/assets/hero/image8.png",
  },
  {
    id: 9,
    src: "/assets/hero/image9.png",
  },
  {
    id: 10,
    src: "/assets/hero/image10.png",
  },
  {
    id: 11,
    src: "/assets/hero/image11.png",
  },
  {
    id: 12,
    src: "/assets/hero/image12.png",
  },
  {
    id: 13,
    src: "/assets/hero/image13.png",
  },
  {
    id: 14,
    src: "/assets/hero/image14.png",
  },
  {
    id: 15,
    src: "/assets/hero/image15.png",
  },
  {
    id: 16,
    src: "/assets/hero/image16.png",
  },
];

const FloatingGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 relative">
      {squareData.map((sq) => (
        <motion.div
          key={sq.id}
          className="w-full h-full rounded-lg overflow-hidden"
          animate={{
            x:
              (mousePosition.x /
                (typeof window !== "undefined" ? window.innerWidth : 1) -
                0.5) *
              10,
            y:
              (mousePosition.y /
                (typeof window !== "undefined" ? window.innerHeight : 1) -
                0.5) *
              10,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <Image
            src={sq.src}
            alt={`Image ${sq.id}`}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingGrid;
