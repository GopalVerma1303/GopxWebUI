import Link from "next/link";
import BentoGrid from "./BentoGrid";
import GopxUserStack from "./GopxUserStack";
import { FiGithub } from "react-icons/fi";
import { FaGithubAlt, FaGithubSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12  grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
      <div>
        <span className="block mb-3 text-xs md:text-sm text-[#5271ff] font-medium">
          Effortless UI Development with{" "}
          <span className="relative text-[#5279ff] font-extrabold">
            GOPX WEBUI
            <svg
              className="absolute -bottom-0.8 left-0 w-full"
              viewBox="0 0 338 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.26C47.65 4.24667 94.3167 3.73333 141 3.72C187.683 3.70667 234.35 4.19333 281 5.18C300.667 6.04667 320.333 7.24667 340 8.78"
                stroke="#5271ff"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
        <h3
          className="inline-flex text-4xl md:text-6xl font-bold leading-tight tracking-tight -ml-0.5 mt-5 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent"
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
        <GopxUserStack />
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/components"
            className="bg-[#5271ff] sm:text-medium text-sm justify-center items-center flex py-2 px-4 rounded transition-all hover:bg-[#5259ff] active:scale-95 !text-white !no-underline"
          >
            Explore Components →
          </Link>
          <Link
            href="https://github.com/GopalVerma1303/webui.gopx"
            className="border flex justify-center items-center gap-2 sm:text-medium text-sm border-black/40 dark:border-white/40 font-medium py-2 px-4 rounded transition-all dark:hover:border-white/70 hover:border-black/70 active:scale-95  !no-underline dark:!text-white !text-black"
          >
            <BsGithub /> Star on Github
          </Link>
        </div>
      </div>
      <BentoGrid />
    </section>
  );
};

export default ShuffleHero;
