import React from "react";
import TorsionalLink from "@/components/ui/torsional-link";

const TorsionalLinkDemo: React.FC = () => {
  return (
    <section className="grid place-content-center gap-4 rounded-lg p-8">
      <TorsionalLink href="#">Components</TorsionalLink>
      <TorsionalLink href="#">Templates</TorsionalLink>
      <TorsionalLink href="#">Colors</TorsionalLink>
      <TorsionalLink href="#">Pricing</TorsionalLink>
      <TorsionalLink href="#">FAQs</TorsionalLink>
    </section>
  );
};

export default TorsionalLinkDemo;
