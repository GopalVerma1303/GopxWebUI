import React from "react";
import {
  FaImages,
  FaCaretSquareDown,
  FaRegQuestionCircle,
  FaMedal,
  FaLink,
  FaDollarSign,
  FaChevronDown,
  FaMousePointer,
  FaSquare,
  FaTh,
  FaKeyboard,
  FaFont,
} from "react-icons/fa";
import { GrTooltip } from "react-icons/gr";
import { LuWallpaper } from "react-icons/lu";

// Importing ComponentCard and ComponentCardWrapper
import ComponentCard from "@/components/ComponentCard";
import ComponentCardWrapper from "@/components/ComponentCardWrapper";

// Define the data for components
const componentsData = [
  {
    title: "Carousels",
    href: "/components/carousels",
    Icon: FaImages,
    sections: ["Trending", "Components"],
  },
  {
    title: "Dropdown Menus",
    href: "/components/dropdown-menus",
    Icon: FaCaretSquareDown,
    sections: ["Trending", "Components"],
  },
  {
    title: "FAQ Sections",
    href: "/components/faq-sections",
    Icon: FaRegQuestionCircle,
    sections: ["Trending", "Sections"],
  },
  {
    title: "Hero Sections",
    href: "/components/hero-sections",
    Icon: FaMedal,
    sections: ["Trending", "Sections"],
  },
  {
    title: "Links",
    href: "/components/links",
    Icon: FaLink,
    sections: ["Trending", "Components"],
  },
  {
    title: "Tooltips",
    href: "/components/tooltips",
    Icon: GrTooltip,
    sections: ["Trending", "Components"],
  },
  {
    title: "Pricing Sections",
    href: "/components/pricing-sections",
    Icon: FaDollarSign,
    sections: ["Sections"],
  },
  {
    title: "Accordions",
    href: "/components/accordions",
    Icon: FaChevronDown,
    sections: ["Components"],
  },
  {
    title: "Buttons",
    href: "/components/buttons",
    Icon: FaMousePointer,
    sections: ["Components"],
  },
  {
    title: "Cards",
    href: "/components/cards",
    Icon: FaSquare,
    sections: ["Components"],
  },
  {
    title: "Grids",
    href: "/components/grids",
    Icon: FaTh,
    sections: ["Components"],
  },
  {
    title: "Inputs",
    href: "/components/inputs",
    Icon: FaKeyboard,
    sections: ["Components"],
  },
  {
    title: "Text",
    href: "/components/text",
    Icon: FaFont,
    sections: ["Components"],
  },
  {
    title: "Backgrounds",
    href: "/components/backgrounds",
    Icon: LuWallpaper,
    sections: ["Aesthetics"],
  },
];

const renderComponents = (section: string) => {
  return componentsData
    .filter((component) => component.sections.includes(section))
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort the filtered components alphabetically
    .map(({ title, href, Icon }) => (
      <ComponentCard key={title} title={title} Icon={Icon} href={href} />
    ));
};

const ComponentsSection: React.FC = () => (
  <div>
    <h2 className="mb-4 mt-8 text-2xl font-bold">Trending</h2>
    <ComponentCardWrapper>{renderComponents("Trending")}</ComponentCardWrapper>

    <h2 className="mb-4 mt-8 text-2xl font-bold">Sections</h2>
    <ComponentCardWrapper>{renderComponents("Sections")}</ComponentCardWrapper>

    <h2 className="mb-4 mt-8 text-2xl font-bold">Components</h2>
    <ComponentCardWrapper>
      {renderComponents("Components")}
    </ComponentCardWrapper>

    <h2 className="mb-4 mt-8 text-2xl font-bold">Aesthetics</h2>
    <ComponentCardWrapper>
      {renderComponents("Aesthetics")}
    </ComponentCardWrapper>
  </div>
);

export default ComponentsSection;
