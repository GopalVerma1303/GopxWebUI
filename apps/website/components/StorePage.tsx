import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { PACKS, TEMPLATES } from "@/content/store";
import { Tabs } from "nextra/components";

interface TechStackItem {
  name: string;
  image: string;
}

interface Store {
  name: string;
  docsLink: string;
  description: string;
  images: string[];
  sp: number;
  cp: number;
}

interface StorePageProps {
  templates: Record<string, Store[]>;
}

export const StorePage: React.FC<StorePageProps> = () => {
  const StoreItem: React.FC<{ item: Store }> = ({ item }) => {
    return (
      <div className="p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#f1f1f1] dark:bg-[#1f1f1f] border dark:border-white/15 border-black/15 rounded-lg w-full">
        <Link
          href={item.docsLink}
          className="flex flex-col mb-4 lg:mb-0  space-y-4 flex-grow w-[380px]"
        >
          <h2 className="font-bold text-xl break-words">
            {item.name || "Portfolio Store"}
          </h2>
          <p className="opacity-60 break-words text-sm">
            {item.description ||
              "Every Portfolio Store is a multi-page responsive website."}
          </p>
          <p className="font-bold text-3xl">
            ${item.sp}{" "}
            <span className="opacity-60 text-sm font-light line-through">
              ${item.cp}
            </span>
            <span className="opacity-80 text-green-500 text-sm  mx-2">
              {item.sp === 0
                ? "FREE"
                : `${(((item.cp - item.sp) / item.cp) * 100).toFixed(2)}% off!`}
            </span>
          </p>
          <div className="flex gap-2"></div>
        </Link>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-full">
          {item.images?.slice(0, 3).map((src, index) => (
            <div
              key={index}
              className="relative w-full h-60 m-1 rounded-md overflow-hidden"
            >
              <Image
                src={src || "https://gopx.dev/og.jpeg"}
                alt={`Store preview ${index + 1}`}
                width={216}
                height={216}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-[50px] mb-36 mx-5">
      <div className="max-w-7xl mx-auto">
        <Tabs items={["Component Packs", "Templates"]}>
          <Tabs.Tab>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PACKS.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </div>
          </Tabs.Tab>
          <Tabs.Tab>
            {TEMPLATES.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden"
              >
                <StoreItem item={item} />
              </motion.div>
            ))}
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
};

interface Pack {
  name: string;
  docsLink: string;
  description: string;
  images: string[];
  sp: number;
  cp: number;
}

const ProductCard: React.FC<{ item: Pack }> = ({ item }) => {
  return (
    <div className="w-full border border-black/15 rounded-lg shadow bg-[#f1f1f1] dark:bg-[#1f1f1f] dark:border-white/15 overflow-hidden">
      <Link href={item.docsLink} className="flex flex-col h-full">
        <div className="relative w-full pt-[52.36%]">
          <Image
            className="rounded-t object-cover"
            src={item.images[0] || "https://gopx.dev/og.jpeg"}
            alt={`${item.name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-xl flex items-center font-semibold tracking-tight mb-2">
            {item.name}{" "}
            <span className="text-xs font-semibold px-2 py-0.5 rounded ms-2 border dark:border-white/15 border-black/15 dark:bg-white/5 font-mono bg-black/5">
              {item.images.length}
            </span>
          </h5>
          <p className="opacity-60 mb-4 flex-grow">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl">
              ${item.sp}{" "}
              <span className="opacity-60 text-sm font-light line-through">
                ${item.cp}
              </span>
              <span className="opacity-80 text-green-500 text-sm  mx-2">
                {item.sp === 0
                  ? "FREE"
                  : `${(((item.cp - item.sp) / item.cp) * 100).toFixed(2)}% off!`}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
