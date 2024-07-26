// @ts-nocheck

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12  grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Effortless UI Development with{" "}
          <span className="relative text-[#818CF8] font-bold">
            GOPX WEBUI
            <svg
              className="absolute -bottom-0.8 left-0 w-full"
              viewBox="0 0 338 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.26C47.65 4.24667 94.3167 3.73333 141 3.72C187.683 3.70667 234.35 4.19333 281 5.18C300.667 6.04667 320.333 7.24667 340 8.78"
                stroke="#818CF8"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
        <h3
          className="inline-flex text-4xl md:text-6xl font-bold leading-tight tracking-tight -ml-0.5 mt-6 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent"
          style={{
            fontSize: "min(3.375rem, max(8vw, 2.5rem))",
            fontFeatureSettings: "initial",
            lineHeight: 1.2,
            paddingBottom: "0.2em",
          }}
        >
          Beautiful UI Components for Web at Your Fingertips
        </h3>
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 my-4 md:my-6">
          Enhance your projects with our pre-built Tailwind CSS and Framer
          Motion components. Simply copy, paste, and customize to fit your
          needs.
        </p>
        <Link
          href="/components"
          className="bg-indigo-500 font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 !text-white !no-underline"
        >
          Explore Components
        </Link>
      </div>
      {/* <HeroImage /> */}
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

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

const generateSquares = () => {
  return shuffle(squareData).map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const HeroImage = () => {
  return (
    <div>
      <Image
        src={"/webui-light-rounded.png"}
        width={500}
        height={500}
        alt="logo"
        className="dark:hidden rounded-lg "
      />
      <Image
        src={"/webui-dark-rounded.png"}
        width={500}
        height={500}
        alt="logo"
        className="hidden dark:block rounded-lg "
      />
    </div>
  );
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
