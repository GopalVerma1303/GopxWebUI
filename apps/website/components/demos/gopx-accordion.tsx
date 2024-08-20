"use client";

import React, { useState } from "react";
import Accordion from "@/components/Accordion";

const GopxAccordionDemo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    { title: "Section 1", description: "This is the content for section 1." },
    {
      title: "Section 2",
      description: "Here's some information for section 2.",
    },
    { title: "Section 3", description: "Section 3 contains this text." },
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          description={item.description}
          isActive={activeIndex === index}
          toggleActive={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default GopxAccordionDemo;
