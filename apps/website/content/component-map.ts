import { IconType } from "react-icons";
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

interface ComponentMap {
  [key: string]: {
    icon: IconType;
    href: string;
  };
}

export const componentMap: ComponentMap = {
  Carousels: { icon: FaImages, href: "/components/carousels" },
  "Dropdown Menus": {
    icon: FaCaretSquareDown,
    href: "/components/dropdown-menus",
  },
  "FAQ Sections": {
    icon: FaRegQuestionCircle,
    href: "/components/faq-sections",
  },
  "Hero Sections": { icon: FaMedal, href: "/components/hero-sections" },
  Links: { icon: FaLink, href: "/components/links" },
  Tooltips: { icon: GrTooltip, href: "/components/tooltips" },
  "Pricing Sections": {
    icon: FaDollarSign,
    href: "/components/pricing-sections",
  },
  Accordions: { icon: FaChevronDown, href: "/components/accordions" },
  Buttons: { icon: FaMousePointer, href: "/components/buttons" },
  Cards: { icon: FaSquare, href: "/components/cards" },
  Grids: { icon: FaTh, href: "/components/grids" },
  Inputs: { icon: FaKeyboard, href: "/components/inputs" },
  Text: { icon: FaFont, href: "/components/text" },
  Backgrounds: { icon: LuWallpaper, href: "/components/backgrounds" },
};
