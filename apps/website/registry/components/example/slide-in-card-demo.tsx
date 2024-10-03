"use client";

import React, { useState } from "react";
import SlideInCard from "@/components/ui/slide-in-card";

export default function ArtGallery() {
  interface ArtItem {
    name: string;
    desc: string;
    imgUrl: string;
    date: string;
    loc: string;
    shotOn: string;
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const artItems: ArtItem[] = [
    {
      name: "Sunset at the Beach",
      desc: "A beautiful sunset captured at the beach",
      imgUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80",
      date: "June 2023",
      loc: "Malibu, CA",
      shotOn: "Canon EOS R5",
    },
    {
      name: "City Lights",
      desc: "Vibrant city lights at night",
      imgUrl:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80",
      date: "July 2023",
      loc: "New York, NY",
      shotOn: "Sony A7III",
    },
    {
      name: "Mountain Vista",
      desc: "Breathtaking view of mountain ranges",
      imgUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
      date: "August 2023",
      loc: "Swiss Alps",
      shotOn: "Nikon D850",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {artItems.map((item, index) => (
        <SlideInCard
          key={index}
          item={item}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
        />
      ))}
    </div>
  );
}
