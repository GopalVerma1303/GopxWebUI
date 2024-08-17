import Link from "next/link";
import React from "react";

interface BentoCardProps {
  bgImage: string;
  className?: string;
  url: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  bgImage,
  className = "",
  url,
}) => {
  return (
    <Link
      href={url}
      className={`relative rounded-lg overflow-hidden group ${className}`}
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-80 group-hover:opacity-100 duration-300 transition-transform ease-in-out transform group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </Link>
  );
};

interface Card {
  bgImage: string;
  className?: string;
  url: string;
}

const BentoGrid: React.FC = () => {
  const baseUrl = "https://webui.gopx.dev";

  const cards: Card[] = [
    {
      bgImage: `${baseUrl}/assets/hero/bento/1.png`,
      url: "/components",
      className: "col-span-2 row-span-2 aspect-square",
    },
    {
      bgImage: `${baseUrl}/assets/hero/bento/2.png`,
      className: "aspect-square",
      url: "/templates",
    },
    {
      bgImage: `${baseUrl}/assets/hero/bento/4.png`,
      className: "aspect-square",
      url: "/pricing",
    },
    {
      bgImage: `${baseUrl}/assets/hero/bento/3.png`,
      className: "col-span-2 aspect-[45px]",
      url: "/colors",
    },
    {
      bgImage: `${baseUrl}/assets/hero/bento/5.png`,
      className: "aspect-square",
      url: "/faqs",
    },
  ];

  return (
    <div className="w-full aspect-square grid grid-cols-3 grid-rows-3 gap-4">
      {cards.map((card, index) => (
        <BentoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default BentoGrid;
