import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeatureItemProps {
  included: boolean;
  name: string;
}

const PricingToggle: React.FC<{
  isPeriodYearly: boolean;
  onToggle: () => void;
}> = ({ isPeriodYearly, onToggle }) => (
  <div className="flex items-center justify-center my-8">
    <span
      className={`mr-3 ${isPeriodYearly ? "text-gray-500 dark:text-gray-400" : "font-semibold"}`}
    >
      Monthly
    </span>
    <motion.div
      className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
      onClick={onToggle}
    >
      <motion.div
        className="bg-white w-5 h-5 rounded-full shadow-md"
        layout
        transition={spring}
        animate={{ x: isPeriodYearly ? 28 : 0 }}
      />
    </motion.div>
    <span
      className={`ml-3 ${isPeriodYearly ? "font-semibold" : "text-gray-500 dark:text-gray-400"}`}
    >
      Yearly
    </span>
  </div>
);

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const FeatureItem: React.FC<FeatureItemProps> = ({ included, name }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center mb-2 text-sm"
  >
    <span className={`mr-2 ${included ? "text-green-500" : "text-red-500"}`}>
      {included ? "✓" : "×"}
    </span>
    {name}
  </motion.li>
);

interface PricingTierProps {
  tier: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: FeatureItemProps[];
  buttonText: string;
  isPeriodYearly: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  tier,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  buttonText,
  isPeriodYearly,
}) => {
  return (
    <motion.div
      className={`shadow-lg dark:shadow-white/5 border border-black/20 dark:border-white/20 relative rounded-lg p-6 grid grid-cols-1 gap-6 h-full w-full ${tier === "Pages" ? `before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r dark:before:from-blue-950 dark:before:to-purple-950 before:from-blue-100 before:to-purple-100 before:p-[2px] dark:!border-white !border-indigo-400 ` : ""} `}
    >
      <div className="flex flex-col justify-center items-start gap-2">
        <h3 className="text-lg font-bold">{tier}</h3>
        <motion.p
          className="text-3xl font-bold"
          key={isPeriodYearly ? yearlyPrice : monthlyPrice}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {isPeriodYearly ? yearlyPrice : monthlyPrice}
          </motion.span>
          <span className="text-sm font-normal ml-1">
            {isPeriodYearly ? "/year" : "/month"}
          </span>
        </motion.p>
        <p className="opacity-70 text-sm ">{description}</p>
      </div>
      <div className="separator mb-4"></div>
      <ul className="sm:h-80 h-fit space-y-2">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </ul>

      <Link
        href={`${buttonText === "Browse Components" ? "/components" : "https://cal.com/bettercallgopal/personalizedcall"}`}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-6 py-2 px-4 rounded-lg text-sm font-bold transition-colors ${
            tier === "Pro" || tier === "Pages"
              ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white dark:from-indigo-600 dark:to-blue-600"
              : "bg-black/70 dark:bg-white/20 text-white hover:dark:bg-white/30 hover:bg-black/90"
          }`}
        >
          {buttonText}
        </motion.button>
      </Link>
    </motion.div>
  );
};

const PricingComponent: React.FC = () => {
  const [isPeriodYearly, setIsPeriodYearly] = useState(false);

  const tiers = [
    {
      tier: "Existing Components",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      description:
        "Explore a constantly expanding collection of components available to you for free.",
      features: [
        { included: true, name: "Wide variety of components" },
        { included: true, name: "Built with React / Next.js / Tailwind CSS" },
        { included: true, name: "MIT License for personal and commercial use" },
        { included: true, name: "Chat support available" },
      ],
      buttonText: "Browse Components",
    },
    {
      tier: "Custom Components",
      monthlyPrice: "$799.99",
      yearlyPrice: "$8,399.89",
      description:
        "Custom components designed to fit your needs, easily integrated. Perfect for adding elements.",
      features: [
        { included: true, name: "One custom component at a time" },
        { included: true, name: "React / Next.js / Tailwind CSS code" },
        { included: true, name: "Design and development included" },
        { included: true, name: "Unlimited revisions" },
        { included: true, name: "24-hour support response time" },
        { included: true, name: "Private communication channel" },
        { included: true, name: "4-7 days turnaround" },
        { included: true, name: "Pause or cancel anytime" },
      ],
      buttonText: "Buy Now",
    },
    {
      tier: "Pages",
      monthlyPrice: "$1,199.99",
      yearlyPrice: "$12,599.89",
      description:
        "Ideal for early-stage startups needing a marketing site and ongoing development work.",
      features: [
        { included: true, name: "One page request at a time" },
        { included: true, name: "React / Next.js / Tailwind CSS code" },
        { included: true, name: "Design and development included" },
        { included: true, name: "Unlimited revisions" },
        { included: true, name: "CMS integration" },
        { included: true, name: "SEO optimization" },
        { included: true, name: "24-hour support response time" },
        { included: true, name: "Private communication channel" },
        { included: true, name: "7-10 days turnaround" },
        { included: true, name: "Pause or cancel anytime" },
      ],
      buttonText: "Buy Now",
    },
    {
      tier: "Multi Page Website",
      monthlyPrice: "Starts at $2,100",
      yearlyPrice: "Starts at $22,050",
      description:
        "Great for small businesses needing a fast website that looks good and converts visitors into customers.",
      features: [
        { included: true, name: "Multi-page landing website" },
        { included: true, name: "Web Apps and SaaS development" },
        { included: true, name: "AI application development" },
        { included: true, name: "Design and development included" },
        { included: true, name: "24-hour support response time" },
        { included: true, name: "Private communication channel" },
        { included: true, name: "Unlimited revisions" },
        { included: true, name: "Negotiable delivery time" },
      ],
      buttonText: "Buy Now",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto mb-24">
      <PricingToggle
        isPeriodYearly={isPeriodYearly}
        onToggle={() => setIsPeriodYearly(!isPeriodYearly)}
      />
      <motion.div
        className="mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:m-2 m-4">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              {...tier}
              isPeriodYearly={isPeriodYearly}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default PricingComponent;
