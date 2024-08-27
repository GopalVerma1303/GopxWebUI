"use client";

import { PACKS } from "@/content/store";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FeatureItem = ({ item }: { item: string }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center mb-2 text-sm"
  >
    <span className="text-green-500 mr-2">{"✓"}</span>
    {item}
  </motion.li>
);

const Template = ({ id }: { id: string }) => {
  const template = PACKS.find((p) => p.id === id);

  if (!template) {
    return <div>Template not found.</div>; // Handle case where template is not found
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Fixed info section */}
          <div className="lg:sticky lg:top-36 lg:h-[calc(100vh-4rem)] lg:w-1/3">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <h1 className="text-xl font-medium">{template.name}</h1>
                {template.discount && (
                  <span className="opacity-80 text-green-500 text-sm">
                    {(
                      ((template.cp - template.sp) / template.cp) *
                      100
                    ).toFixed(2)}
                    % off!
                  </span>
                )}
              </div>
              <div className="flex flex-row items-center gap-1 text-lg">
                <p className="font-bold text-3xl ">${template.sp}</p>
                <p className="text-xs opacity-50 line-through">
                  ${template.cp}
                </p>
              </div>
              <div className="mt-2 text-sm text-justify">
                {template.summary}
              </div>
              <div>
                <ul className="space-y-2">
                  {template.features.map((feature, index) => (
                    <FeatureItem key={index} item={feature} />
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <Link
                  href={template.livePreviewLink}
                  target="_blank"
                  className="px-10 bg-black/15 dark:bg-white/15 text-opacity-90  py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105 gap-2"
                >
                  Live Preview
                </Link>
                <Link
                  href={template.downloadLink}
                  target="_blank"
                  className="px-10 bg-black font-medium dark:bg-white text-white dark:text-black text-opacity-90 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105"
                >
                  Buy now ${template.sp}
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-2/3">
            <div className="flex flex-col gap-8">
              {template.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${template.name} - Image ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full rounded-lg border  dark:border-white/15 border-black/15"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
