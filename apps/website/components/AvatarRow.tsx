//@ts-nocheck

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AvatarRow = ({ profiles }) => {
  return (
    <div className="flex items-center pb-2">
      <div className="flex -space-x-2">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            className="relative w-10 h-10 rounded-full border-2 bg-black/10 dark:bg-white/10 border-black/5 dark:border-white/20 overflow-hidden hover:z-40 hover:cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Image
              src={profile.image}
              alt={profile.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full dark:invert p-2"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvatarRow;
