import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { STORE_ITEMS } from "@/content/store";
import AvatarRow from "@/components/AvatarRow";
import { FaGithub } from "react-icons/fa";

interface TechStackItem {
  name: string;
  image: string;
}

interface Store {
  question: string;
  title: string;
  route: string;
  description: string;
  link: string;
  code: string;
  images: string[];
  stack: TechStackItem[];
}

interface StorePageProps {
  templates: Record<string, Store[]>;
}

export const StorePage: React.FC<StorePageProps> = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Component Packs");

  useEffect(() => {
    const tab = router.query.tab as string;
    if (tab && Object.keys(STORE_ITEMS).includes(tab)) {
      setActiveTab(tab);
    }
  }, [router.query.tab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/store?tab=${encodeURIComponent(tab)}`, undefined, {
      shallow: true,
    });
  };

  const StoreItem: React.FC<{ item: Store }> = ({ item }) => {
    return (
      <div className="p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#f1f1f1] dark:bg-[#1f1f1f] border dark:border-white/15 border-black/15 rounded-lg  mx-4">
        <Link
          href={item.route}
          className="flex flex-col mb-4 lg:mb-0  space-y-4 flex-grow w-[380px]"
        >
          <h2 className="font-bold text-xl break-words">
            {item.title || "Portfolio Store"}
          </h2>
          <p className="opacity-60 break-words text-sm">
            {item.description ||
              "Every Portfolio Store is a multi-page responsive website."}
          </p>
          {/* <AvatarRow profiles={item.stack} /> */}
          <p className="font-bold text-3xl">
            $9{" "}
            <span className="opacity-60 text-sm font-light line-through">
              $59
            </span>
            <span className="opacity-80 text-green-500 text-sm font-light mx-2">
              {(((59 - 9) / 59) * 100).toFixed(2)}% off!
            </span>
          </p>
          <div className="flex gap-2">
            {/* <Link */}
            {/*   href={item.route} */}
            {/*   className="bg-black dark:bg-white text-white dark:text-black text-opacity-90 px-4 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105" */}
            {/* > */}
            {/*   Explore */}
            {/* </Link> */}
            {/* <Link */}
            {/*   href={item.code || "https://github.com/GopalVerma1303/gopx.dev"} */}
            {/*   target="_blank" */}
            {/*   className="border border-black dark:border-white text-black dark:text-white text-opacity-90 px-4 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105 gap-2" */}
            {/* > */}
            {/*   Source Code */}
            {/*   <FaGithub /> */}
            {/* </Link> */}
          </div>
        </Link>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-full">
          {item.images?.map((src, index) => (
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
    <div className="min-h-screen mt-[50px] mb-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start space-x-1 mb-8 w-full mx-auto h-42 overflow-x-auto no-scrollbar px-4">
          {Object.keys(STORE_ITEMS).map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 font-bold rounded-md text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600"
                  : "text-black/50 dark:text-white/50"
              }`}
              onClick={() => handleTabChange(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <div className="space-y-4">
          <ProductCard />
          {/* {STORE_ITEMS[activeTab].map((item) => ( */}
          {/*   <motion.div */}
          {/*     key={item.question} */}
          {/*     initial={{ opacity: 0, y: 20 }} */}
          {/*     animate={{ opacity: 1, y: 0 }} */}
          {/*     transition={{ duration: 0.3 }} */}
          {/*     className="rounded-lg overflow-hidden m-2" */}
          {/*   > */}
          {/*     <StoreItem item={item} /> */}
          {/*   </motion.div> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm border border-black/15 rounded-lg shadow bg-[#f1f1f1] dark:bg-[#1f1f1f] dark:border-white/15">
      <Link href="#">
        <Image
          className="p-5 rounded"
          src="/assets/templates/gopx-1.png"
          alt="product image"
          width={500}
          height={500}
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl  flex items-center font-semibold tracking-tight ">
            Hero Sections{" "}
            <span className="text-xs font-semibold px-2 py-0.5 rounded ms-2 border dark:border-white/15 border-black/15 dark:bg-white/5 font-mono bg-black/5">
              3
            </span>
          </h5>

          <p className="opacity-60">
            A collection of hero sections that are modern and stand out
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="font-bold text-3xl">
              $9{" "}
              <span className="opacity-60 text-sm font-light line-through">
                $59
              </span>
              <span className="opacity-80 text-green-500 text-sm font-light mx-2">
                {(((59 - 9) / 59) * 100).toFixed(2)}% off!
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
