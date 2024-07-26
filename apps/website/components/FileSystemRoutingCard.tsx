// components/FileSystemRoutingCard.tsx
import { FeatureCard } from "./FeatureCard";

export function FileSystemRoutingCard() {
  return (
    <FeatureCard
      large
      id="fs-card"
      href="/docs/docs-theme/page-configuration"
      className="text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/assets/routing.png), url(/assets/gradient-bg.jpeg)",
        textShadow: "0 1px 6px rgb(38 59 82 / 18%)",
      }}
    >
      <h3>
        Organize pages intuitively, <br />
        with file-system routing from Next.js
      </h3>
    </FeatureCard>
  );
}
