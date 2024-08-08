import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeatureItemProps {
  included: boolean;
  name: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ included, name }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center mb-2 text-xs"
  >
    <span className={`mr-2 ${included ? "text-green-500" : "text-red-500"}`}>
      {included ? "✓" : "×"}
    </span>
    {name}
  </motion.li>
);

interface PricingTierProps {
  tier: string;
  price: string;
  description: string;
  features: FeatureItemProps[];
  buttonText: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  tier,
  price,
  description,
  features,
  buttonText,
}) => {
  return (
    <motion.div
      className={`shadow-lg dark:shadow-white/5 border border-black/20 dark:border-white/20 relative rounded-lg p-4 grid grid-cols-1 gap-4 h-full w-full ${tier === "Pages" ? `before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r dark:before:from-blue-950 dark:before:to-purple-950 before:from-blue-100 before:to-purple-100 before:p-[2px] dark:!border-white !border-indigo-400 ` : ""} `}
    >
      <div className="flex flex-col justify-center items-start gap-2">
        <h3 className="text-base font-bold">{tier}</h3>
        <p className="text-2xl font-bold">{price}</p>
        <p className="opacity-70 text-xs">{description}</p>
      </div>
      <div className="separator mb-4"></div>
      <ul className="sm:h-60 h-fit space-y-2">
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
          className={`mt-4 py-2 px-4 rounded-lg text-xs font-bold transition-colors ${
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
  const tiers = [
    {
      tier: "Existing Components",
      price: "Free",
      description:
        "Explore a constantly expanding collection of components available to you for free.",
      features: [
        { included: true, name: "Wide variety of components" },
        { included: true, name: "Built with React / Next.js / Tailwind CSS" },
        { included: true, name: "MIT License for personal and commercial use" },
        { included: true, name: "Chat support available" },
      ],
      buttonText: "Browse",
    },
    {
      tier: "Custom Components",
      price: "$799.99/mo",
      description:
        "Custom components designed to fit your needs, easily integrated. Perfect for adding elements.",
      features: [
        { included: true, name: "One custom component at a time" },
        { included: true, name: "React / Next.js / Tailwind CSS code" },
        { included: true, name: "Design and development included" },
        { included: true, name: "Unlimited revisions" },
        { included: true, name: "Pause or cancel anytime" },
      ],
      buttonText: "Buy Now",
    },
    {
      tier: "Pages",
      price: "$1199.99/mo",
      description:
        "Ideal for early-stage startups needing a marketing site and ongoing development work.",
      features: [
        { included: true, name: "One page request at a time" },
        { included: true, name: "React / Next.js / Tailwind CSS code" },
        { included: true, name: "CMS integration" },
        { included: true, name: "SEO optimization" },
        { included: true, name: "7-10 days turnaround" },
        { included: true, name: "Pause or cancel anytime" },
      ],
      buttonText: "Buy Now",
    },
    {
      tier: "Multi Page Website",
      price: "Starts at $2100",
      description:
        "Great for small businesses needing a fast website that looks good and converts visitors into customers.",
      features: [
        { included: true, name: "Multi-page landing website" },
        { included: true, name: "Web Apps and SaaS development" },
        { included: true, name: "24-hour support response time" },
        { included: true, name: "Unlimited revisions" },
        { included: true, name: "Negotiable delivery time" },
      ],
      buttonText: "Buy Now",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4 mt-12">Pricing</h2>
      <p className="text-center opacity-60 mb-12 mt-8 px-6">
        Use it for free for yourself, upgrade when your team needs advanced
        control.
      </p>

      <div className="flex items-center justify-center w-full max-w-7xl mx-auto mb-24">
        <motion.div
          className="mx-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:m-2 m-4">
            {tiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingComponent;
