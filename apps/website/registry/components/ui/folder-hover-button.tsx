import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface FolderHoverButtonProps {
  folderName: string;
  images: string[];
}

function FolderHoverButton({ folderName, images }: FolderHoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start("open");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start("closed");
  };

  const folderVariants = {
    closed: { rotateX: 0, y: 0 },
    open: { rotateX: -60, y: "20%" },
  };

  const imageVariants = (index: number) => ({
    closed: { rotateX: 0, y: 0, opacity: 0 },
    open: {
      rotateX: -55 + index * 5,
      y: `${20 - index * 2}%`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.1,
      },
    },
  });

  return (
    <div
      className="relative w-64 h-80 perspective-1000 cursor-pointer"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      role="button"
      tabIndex={0}
      aria-label={`Open ${folderName} folder`}
    >
      <div className="absolute inset-0 flex items-end justify-center">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 origin-bottom"
            initial="closed"
            animate={controls}
            variants={imageVariants(index)}
            style={{
              transformStyle: "preserve-3d",
              zIndex: images.length - index,
            }}
          >
            <Image
              src={image}
              alt={`Image ${index + 1} in ${folderName} folder`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg shadow-md"
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-0 bg-yellow-200 rounded-t-lg origin-bottom shadow-lg"
          initial="closed"
          animate={controls}
          variants={folderVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            transformStyle: "preserve-3d",
            zIndex: images.length + 1,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-800">
              {folderName}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const FolderHoverButtonDemo = () => {
  return (
    <FolderHoverButton
      folderName="My Folder"
      images={[
        "https://webui.gopx.dev/og.jpeg",
        "https://webui.gopx.dev/og.jpeg",
        "https://webui.gopx.dev/og.jpeg",
      ]}
    />
  );
};

export default FolderHoverButtonDemo;
