// components/SyntaxHighlightingCard.tsx
import { FeatureCard } from "./FeatureCard";

export function SyntaxHighlightingCard() {
  return (
    <FeatureCard id="highlighting-card" href="/docs/guide/syntax-highlighting">
      <h3>
        Advanced syntax <br className="sm:hidden" />
        highlighting solution
      </h3>
      <p>
        Performant and reliable build-time syntax highlighting powered by{" "}
        <a
          href="https://shiki.matsu.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shiki
        </a>
        .
      </p>
    </FeatureCard>
  );
}
