import React from "react";
import TorsionalLink from "@/components/ui/torsional-link";

const TorsionalLinkDemo: React.FC = () => {
  return (
    <section className="grid place-content-center gap-4 dark:bg-orange-600 bg-blue-200 rounded-lg px-8 py-24 text-green-600">
      <TorsionalLink href="/components">Components</TorsionalLink>
      <TorsionalLink href="/templates">Templates</TorsionalLink>
      <TorsionalLink href="/colors">Colors</TorsionalLink>
      <TorsionalLink href="/pricing">Pricing</TorsionalLink>
      <TorsionalLink href="/faqs">FAQs</TorsionalLink>
    </section>
  );
};

export default TorsionalLinkDemo;
