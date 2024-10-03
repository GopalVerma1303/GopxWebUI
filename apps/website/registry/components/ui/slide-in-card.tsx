"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Camera } from "lucide-react";
import Image from "next/image";

interface SlideInItem {
  name: string;
  desc: string;
  imgUrl: string;
  date: string;
  loc: string;
  shotOn: string;
}

interface SlideInCardProps {
  item: SlideInItem;
  isActive: boolean;
  onClick: () => void;
}

const SlideInCard: React.FC<SlideInCardProps> = ({
  item,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      className="relative rounded-lg overflow-hidden cursor-pointer w-full aspect-square"
    >
      <Image
        width={800}
        height={800}
        src={item.imgUrl}
        alt={item.name}
        className={`object-cover w-full h-full transition-all duration-500 ${
          isActive ? "scale-105" : "scale-100"
        }`}
      />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ bottom: "-15rem" }}
            animate={{ bottom: "0.55rem" }}
            exit={{ bottom: "-15rem" }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 23,
            }}
            className="absolute inset-x-2 bottom-2 rounded-lg p-4 bg-[#ffffff]/70 dark:bg-[#000000]/70 backdrop-blur-sm"
          >
            <h3 className="text-foreground text-[15px] font-bold">
              {item.name}
            </h3>
            <p className="text-[13px] text-muted-foreground mt-1">
              {item.desc}
            </p>
            <div className="flex flex-col mt-4 gap-1 text-muted-foreground">
              <span className="text-[10px] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.loc}
              </span>
              <span className="text-[10px] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.date}
              </span>
              <span className="text-[10px] flex items-center gap-1">
                <Camera className="w-3 h-3" />
                {item.shotOn}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SlideInCard;
