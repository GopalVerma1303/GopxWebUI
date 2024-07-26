// components/DocsCard.tsx
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface DocsCardProps {
  docsCard: StaticImageData;
  docsCardDark: StaticImageData;
}

export function DocsCard({ docsCard, docsCardDark }: DocsCardProps) {
  return (
    <FeatureCard large centered id="docs-card" href="/docs/docs-theme/start">
      <Image src={docsCard} alt="Background" loading="eager" />
      <Image src={docsCardDark} alt="Background (Dark)" loading="eager" />
      <h3 className="text-white text-shadow">
        Full-power documentation <br className="sm:hidden" />
        in minutes
      </h3>
    </FeatureCard>
  );
}
