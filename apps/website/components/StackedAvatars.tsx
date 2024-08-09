import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Avatar {
  src: string;
  alt: string;
}

interface StackedAvatarsProps {
  avatars: Avatar[];
  maxDisplay?: number;
  size?: number;
  borderColor?: string;
  darkBorderColor?: string;
}

const StackedAvatars: React.FC<StackedAvatarsProps> = ({
  avatars,
  maxDisplay = 5,
  size = 10,
  borderColor = "white",
  darkBorderColor = "gray-800",
}) => {
  const displayAvatars = avatars.slice(0, maxDisplay);
  const remainingCount = avatars.length - maxDisplay;

  return (
    <div className={`flex -space-x-3 rtl:space-x-reverse`}>
      {displayAvatars.map((avatar, index) => (
        <Image
          key={index}
          width={56}
          height={56}
          className={`w-${size} h-${size} border-2 border-${borderColor} rounded-full dark:border-${darkBorderColor}`}
          src={avatar.src}
          alt={avatar.alt}
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={`flex items-center justify-center w-${size} h-${size} text-[10px] text-white/80 font-medium text-white bg-gray-700 border-2 border-${borderColor} rounded-full hover:bg-gray-600 dark:border-${darkBorderColor}`}
        >
          +1.4k
        </div>
      )}
    </div>
  );
};

export default StackedAvatars;
