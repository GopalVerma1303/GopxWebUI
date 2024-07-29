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

interface Template {
  question: string;
  title: string;
  description: string;
  link: string;
  code: string;
  images: string[];
  stack: TechStackItem[];
}

const createTemplate = (
  title: string,
  description: string,
  link: string,
  code: string,
  images: string[],
  techStack: string[],
): Template => {
  const stack: TechStackItem[] = techStack.map((tech) => ({
    name: tech,
    image: TECH_STACK_IMAGES[tech] || "/assets/brands/default.svg", // Use a default image if the tech is not found
  }));

  return {
    question: "unique-key",
    title,
    description,
    link,
    code,
    images,
    stack,
  };
};

interface TemplatesObject {
  [key: string]: Template[];
}

export const TEMPLATES: TemplatesObject = {
  Portfolios: [
    createTemplate(
      "www.gopx.dev",
      "Developer's portfolio website for sharing notes, blogs, and showcase projects.",
      "https://gopx.dev",
      "https://github.com/GopalVerma1303/gopx.dev",
      ["/assets/templates/gopx-1.png", "/assets/templates/gopx-3.png"],
      ["react", "nextjs", "tailwind", "framer-motion"],
    ),
  ],
};
