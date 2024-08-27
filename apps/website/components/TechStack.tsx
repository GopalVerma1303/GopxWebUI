import AvatarStack from "@/components/AvatarRow";

interface TechStackItem {
  name: string;
  image: string;
}

const techImages: Record<string, string> = {
  react: "/assets/brands/react.svg",
  next: "/assets/brands/nextjs.svg",
  tailwind: "/assets/brands/tailwind.svg",
  "framer-motion": "/assets/brands/framer-motion.svg",
  gsap: "/assets/brands/gsap.png",
};

interface TechStackProps {
  techStack: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const techStackItems: TechStackItem[] = techStack.map((tech) => ({
    name: tech,
    image: techImages[tech] || "", // Use an empty string or a default image if not found
  }));

  return <AvatarStack profiles={techStackItems} />;
};

export default TechStack;
