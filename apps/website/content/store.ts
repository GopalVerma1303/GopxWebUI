interface TechStackImages {
  [key: string]: string;
}

const TECH_STACK_IMAGES: TechStackImages = {
  react: "/assets/brands/react.svg",
  nextjs: "/assets/brands/nextjs.svg",
  tailwind: "/assets/brands/tailwind.svg",
  "framer-motion": "/assets/brands/framer-motion.svg",
  gsap: "/assets/brands/gsap.png",
};

interface TechStackItem {
  name: string;
  image: string;
}

interface StoreItem {
  question: string;
  title: string;
  route: string;
  description: string;
  link: string;
  code: string;
  images: string[];
  stack: TechStackItem[];
}

export interface PackItem {
  key: string;
  title: string;
  route: string;
  description: string;
  buy: string;
  images: string[];
  stack: TechStackItem[];
  cp: number;
  sp: number;
}

const createStoreItem = (
  title: string,
  route: string,
  description: string,
  link: string,
  code: string,
  images: string[],
  techStack: string[],
): StoreItem => {
  const stack: TechStackItem[] = techStack.map((tech) => ({
    name: tech,
    image: TECH_STACK_IMAGES[tech] || "/assets/brands/default.svg", // Use a default image if the tech is not found
  }));

  return {
    question: "unique-key",
    title,
    route,
    description,
    link,
    code,
    images,
    stack,
  };
};

const createPackItem = (
  title: string,
  route: string,
  description: string,
  buy: string,
  images: string[],
  techStack: string[],
  cp: number,
  sp: number,
): PackItem => {
  const stack: TechStackItem[] = techStack.map((tech) => ({
    name: tech,
    image: TECH_STACK_IMAGES[tech] || "/assets/brands/default.svg", // Use a default image if the tech is not found
  }));

  return {
    key: "unique-key",
    title,
    route,
    description,
    buy,
    images,
    stack,
    cp,
    sp,
  };
};

interface TemplatesObject {
  [key: string]: StoreItem[];
}

interface ComponentPacksObject {
  [key: string]: PackItem[];
}

export const PACK_ITEMS: ComponentPacksObject = {
  "Component Packs": [
    createPackItem(
      "Hero Sections",
      "store/packs/heros",
      "A collection of hero sections that are modern and stand out",
      "https://gopx.dev",
      [
        "/assets/templates/gopx-1.png",
        "/assets/templates/gopx-3.png",
        "/assets/templates/gopx-1.png",
      ],
      ["react", "nextjs", "tailwind", "framer-motion"],
      59,
      9,
    ),
  ],
};

export const TEMPLATE_ITEMS: TemplatesObject = {
  Templates: [
    createStoreItem(
      "Devsite Template",
      "/store/templates/devsite",
      "Developer's portfolio website for sharing notes, code snippits, resources, blogs, writups, and showcase projects, contributions, collaboration and work experience.",
      "https://gopx.dev",
      "https://github.com/GopalVerma1303/gopx.dev",
      [
        "/assets/templates/gopx-1.png",
        "/assets/templates/gopx-3.png",
        "/assets/templates/gopx-1.png",
      ],
      ["react", "nextjs", "tailwind", "framer-motion"],
    ),
  ],
};
