import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEMPLATES } from "@/content/templates";
import AvatarRow from "@/components/AvatarRow";
import { FaGithub } from "react-icons/fa";

interface TechStackItem {
  name: string;
  image: string;
}

interface Template {
  question: string;
  title: string;
  description: string;
  link: string;
  code: string;
  images: string[];
  stack: TechStackItem[];
}

interface TemplatePageProps {
  templates: Record<string, Template[]>;
}

export const TemplatePage: React.FC<TemplatePageProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("Portfolios");

  const TemplateItem: React.FC<{ item: Template }> = ({ item }) => {
    return (
      <div className="p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
        <div className="flex flex-col mb-4 lg:mb-0 lg:mr-8 lg:pr-8 space-y-4 flex-grow">
          <h2 className="font-bold text-2xl break-words">
            {item.title || "Portfolio Template"}
          </h2>
          <p className="opacity-80 break-words">
            {item.description ||
              "Every Portfolio Template is a multi-page responsive website."}
          </p>
          <AvatarRow profiles={item.stack} />
          <div className="flex gap-2">
            <Link
              href={item.link || "https://gopx.dev"}
              target="_blank"
              className="bg-black dark:bg-white text-white dark:text-black text-opacity-90 px-4 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105"
            >
              View Template
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
            <Link
              href={item.code || "https://github.com/GopalVerma1303/gopx.dev"}
              target="_blank"
              className="border border-black dark:border-white text-black dark:text-white text-opacity-90 px-4 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105 gap-2"
            >
              Source Code
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-full">
          {item.images?.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-80 rounded-md overflow-hidden"
            >
              <Image
                src={src || "https://gopx.dev/og.jpeg"}
                alt={`Template preview ${index + 1}`}
                width={224}
                height={224}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-[50px] mb-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start space-x-1 mb-8 w-full mx-auto h-42 overflow-x-auto no-scrollbar px-4">
          {Object.keys(TEMPLATES).map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 font-bold rounded-md text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600"
                  : "text-black/50 dark:text-white/50"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <div className="space-y-4">
          {TEMPLATES[activeTab].map((item) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden m-2"
            >
              <TemplateItem item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
