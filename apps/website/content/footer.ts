// footer.ts

import { SOCIAL_MEDIA_LINKS, FOLLOW_US_LINKS } from "./social-media";

export const FOOTER_CONTENT = {
  logo: {
    darkImage: "/webui-dark-rounded.png",
    lightImage: "/webui-light-rounded.png",
    alt: "webui logo",
    title: "GOPX WEBUI",
  },
  company: {
    name: "GOPX",
    url: "https://gopx.dev",
  },
  creator: {
    name: "@bettercallgopal",
    url: "https://x.com/bettercallgopal",
  },
  sections: [
    {
      title: "Menu",
      links: [
        { name: "Docs", url: "/docs" },
        { name: "Components", url: "/components" },
        { name: "Templates", url: "/templates" },
        { name: "About", url: "/about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "GOPX", url: "https://gopx.dev/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { name: "Framer Motion", url: "https://www.framer.com/motion/" },
        { name: "GSAP", url: "https://gsap.com/" },
      ],
    },
    {
      title: "Follow us",
      links: Object.entries(FOLLOW_US_LINKS).map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        url: value.link,
        username: value.username,
      })),
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms & Conditions", url: "/terms-and-conditions" },
      ],
    },
  ],
  copyright: {
    year: 2024,
    companyName: "GOPX™",
    companyUrl: "https://gopx.dev",
  },
  socialLinks: Object.entries(FOLLOW_US_LINKS).map(([key, value]) => ({
    name: key,
    url: value.link,
  })),
};
