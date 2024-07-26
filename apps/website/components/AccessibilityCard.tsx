// components/AccessibilityCard.tsx
import { FeatureCard } from "./FeatureCard";

export function AccessibilityCard() {
  return (
    <FeatureCard
      id="a11y-card"
      className="card-with-border bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/high-contrast.png)",
        backgroundPosition: "-160px 160px",
        backgroundSize: 750,
        minHeight: 288,
      }}
    >
      <h3>A11y as a top priority</h3>
      <p>
        Nextra respects system options <br className="sm:hidden" />
        such as <b>Increase Contrast</b> and <b>Reduce Motion</b>.
      </p>
    </FeatureCard>
  );
}
