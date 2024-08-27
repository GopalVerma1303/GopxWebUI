import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";

interface BentoCardProps {
  bgImage: string;
  className?: string;
  url: string;
  title: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  bgImage,
  className = "",
  url,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={url} className={clsx("block", className)}>
      <motion.div
        className="relative w-full h-full rounded-lg overflow-hidden group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-[#FFFFFF] dark:bg-[#111111]">
          <Image
            src={bgImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
        </div>
        <div className="relative z-10 p-3 h-full flex flex-col justify-between text-white">
          <div className="self-end group-hover:rotate-[-45deg] transition-all duration-700">
            <FaArrowRightLong size={16} />
          </div>
          <div>
            <ToolTitle
              isHovered={isHovered}
              className="text-xs sm:text-sm md:text-lg font-bold"
            >
              {title}
            </ToolTitle>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

interface ToolTitleProps {
  children: string;
  isHovered: boolean;
  className?: string;
}

const ToolTitle: React.FC<ToolTitleProps> = ({
  children,
  isHovered,
  className,
}) => {
  return (
    <motion.div
      className={clsx(
        "font-roboto relative block overflow-hidden",
        "transition-colors duration-300",
        className,
      )}
    >
      <motion.div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={isHovered ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
              delay: 0.025 * index,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={isHovered ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
              delay: 0.025 * index,
            }}
            className="inline-block text-white"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

interface Card {
  bgImage: string;
  className?: string;
  url: string;
  title: string;
}

const BentoGrid: React.FC = () => {
  const cards: Card[] = [
    {
      bgImage: "/assets/hero/bento/1.png",
      url: "/components",
      className: "col-span-1 row-span-1",
      title: "Components",
    },
    {
      bgImage: "/assets/hero/bento/6.png",
      url: "/tools/shadows",
      className: "col-span-2 row-span-1",
      title: "Shadow Generator",
    },
    {
      bgImage: "/assets/hero/bento/2.png",
      className: "col-span-1 row-span-1",
      url: "/store",
      title: "Templates",
    },
    {
      bgImage: "/assets/hero/bento/7.png",
      url: "/store",
      className: "col-span-1 row-span-1",
      title: "Packs",
    },
    {
      bgImage: "/assets/hero/bento/4.png",
      className: "col-span-1 row-span-1",
      url: "/pricing",
      title: "Pricing",
    },
    {
      bgImage: "/assets/hero/bento/3.png",
      className: "col-span-2 row-span-1",
      url: "/tools/colors",
      title: "Color Generator",
    },
    {
      bgImage: "/assets/hero/bento/5.png",
      className: "col-span-1 row-span-1",
      url: "/faqs",
      title: "FAQs",
    },
  ];

  return (
    <div className="w-full aspect-square grid grid-cols-3 grid-rows-3 gap-4">
      {cards.map((card, index) => (
        <BentoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default BentoGrid;
