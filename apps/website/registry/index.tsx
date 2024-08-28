import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  accordion: {
    name: "accordion",
    type: "components:ui",
    files: ["registry/components/ui/accordion.tsx"],
  },
  "avatar-stack": {
    name: "avatar-stack",
    type: "components:ui",
    files: ["registry/components/ui/avatar-stack.tsx"],
  },
  "bento-grid": {
    name: "bento-grid",
    type: "components:ui",
    files: ["registry/components/ui/bento-grid.tsx"],
  },
  "bg-bricks": {
    name: "bg-bricks",
    type: "components:ui",
    files: ["registry/components/ui/bg-bricks.tsx"],
  },
  "bg-check": {
    name: "bg-check",
    type: "components:ui",
    files: ["registry/components/ui/bg-check.tsx"],
  },
  "bg-cross": {
    name: "bg-cross",
    type: "components:ui",
    files: ["registry/components/ui/bg-cross.tsx"],
  },
  "bg-dots": {
    name: "bg-dots",
    type: "components:ui",
    files: ["registry/components/ui/bg-dots.tsx"],
  },
  "bg-grid": {
    name: "bg-grid",
    type: "components:ui",
    files: ["registry/components/ui/bg-grid.tsx"],
  },
  "bg-matrix": {
    name: "bg-matrix",
    type: "components:ui",
    files: ["registry/components/ui/bg-matrix.tsx"],
  },
  "bg-nosignal": {
    name: "bg-nosignal",
    type: "components:ui",
    files: ["registry/components/ui/bg-nosignal.tsx"],
  },
  "bg-plus": {
    name: "bg-plus",
    type: "components:ui",
    files: ["registry/components/ui/bg-plus.tsx"],
  },
  "blog-row": {
    name: "blog-row",
    type: "components:ui",
    files: ["registry/components/ui/blog-row.tsx"],
  },
  "copyable-input": {
    name: "copyable-input",
    type: "components:ui",
    files: ["registry/components/ui/copyable-input.tsx"],
  },
  dropdown: {
    name: "dropdown",
    type: "components:ui",
    files: ["registry/components/ui/dropdown.tsx"],
  },
  "ghost-label": {
    name: "ghost-label",
    type: "components:ui",
    files: ["registry/components/ui/ghost-label.tsx"],
  },
  "image-tooltip": {
    name: "image-tooltip",
    type: "components:ui",
    files: ["registry/components/ui/image-tooltip.tsx"],
  },
  "infinite-carousel": {
    name: "infinite-carousel",
    type: "components:ui",
    files: ["registry/components/ui/infinite-carousel.tsx"],
  },
  "page-header": {
    name: "page-header",
    type: "components:ui",
    files: ["registry/components/ui/page-header.tsx"],
  },
  "profile-card": {
    name: "profile-card",
    type: "components:ui",
    files: ["registry/components/ui/profile-card.tsx"],
  },
  "tab-button": {
    name: "tab-button",
    type: "components:ui",
    files: ["registry/components/ui/tab-button.tsx"],
  },
  "text-tooltip": {
    name: "text-tooltip",
    type: "components:ui",
    files: ["registry/components/ui/text-tooltip.tsx"],
  },
  "torsional-link": {
    name: "torsional-link",
    type: "components:ui",
    files: ["registry/components/ui/torsional-link.tsx"],
  },
};

const block: Registry = {
  "gopx-faqs": {
    name: "gopx-faqs",
    type: "components:block",
    registryDependencies: ["page-header"],
    files: ["registry/components/block/gopx-faqs.tsx"],
    component: React.lazy(
      () => import("@/registry/components/block/gopx-faqs"),
    ),
  },
  "gopx-hero": {
    name: "gopx-hero",
    type: "components:block",
    registryDependencies: ["bento-grid", "avatar-stack", "copyable-input"],
    files: ["registry/components/block/gopx-hero.tsx"],
    component: React.lazy(
      () => import("@/registry/components/block/gopx-hero"),
    ),
  },
  "gopx-pricing": {
    name: "gopx-pricing",
    type: "components:block",
    registryDependencies: ["page-header"],
    files: ["registry/components/block/gopx-pricing.tsx"],
    component: React.lazy(
      () => import("@/registry/components/block/gopx-pricing"),
    ),
  },
};

const example: Registry = {
  "avatar-stack-demo": {
    name: "avatar-stack-demo",
    type: "components:example",
    registryDependencies: ["avatar-stack"],
    files: ["registry/components/example/avatar-stack-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/avatar-stack-demo"),
    ),
  },
  "bento-grid-demo": {
    name: "bento-grid-demo",
    type: "components:example",
    registryDependencies: ["bento-grid"],
    files: ["registry/components/ui/bento-grid.tsx"],
    component: React.lazy(() => import("@/registry/components/ui/bento-grid")),
  },
  "copyable-input-demo": {
    name: "copyable-input-demo",
    type: "components:example",
    registryDependencies: ["copyable-input"],
    files: ["registry/components/example/copyable-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/copyable-input-demo"),
    ),
  },
  "ghost-label-demo": {
    name: "ghost-label-demo",
    type: "components:example",
    registryDependencies: ["ghost-label"],
    files: ["registry/components/example/ghost-label-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/ghost-label-demo"),
    ),
  },
  "gopx-accordion-demo": {
    name: "gopx-accordion-demo",
    type: "components:example",
    registryDependencies: ["accordion"],
    files: ["registry/components/example/gopx-accordion-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/gopx-accordion-demo"),
    ),
  },
  "gopx-dropdown-demo": {
    name: "gopx-dropdown-demo",
    type: "components:example",
    registryDependencies: ["dropdown"],
    files: ["registry/components/example/gopx-dropdown-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/gopx-dropdown-demo"),
    ),
  },
  "image-tooltip-demo": {
    name: "image-tooltip-demo",
    type: "components:example",
    registryDependencies: ["image-tooltip"],
    files: ["registry/components/example/image-tooltip-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/image-tooltip-demo"),
    ),
  },
  "infinite-carousel-demo": {
    name: "infinite-carousel-demo",
    type: "components:example",
    registryDependencies: ["infinite-carousel"],
    files: ["registry/components/example/infinite-carousel-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/infinite-carousel-demo"),
    ),
  },
  "profile-card-demo": {
    name: "profile-card-demo",
    type: "components:example",
    registryDependencies: ["profile-card"],
    files: ["registry/components/example/profile-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/profile-card-demo"),
    ),
  },
  "text-tooltip-demo": {
    name: "text-tooltip-demo",
    type: "components:example",
    registryDependencies: ["text-tooltip"],
    files: ["registry/components/example/text-tooltip-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/text-tooltip-demo"),
    ),
  },
  "torsional-link-demo": {
    name: "torsional-link-demo",
    type: "components:example",
    registryDependencies: ["torsional-link"],
    files: ["registry/components/example/torsional-link-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/torsional-link-demo"),
    ),
  },
};

export const registry: Registry = {
  ...ui,
  ...block,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);

const resolvedBlocks = Object.entries(block).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedBlock: Registry = resolvedBlocks.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);

export const downloadRegistry: Registry = {
  ...ui,
  ...updatedExample,
  ...updatedBlock,
};

export type ComponentName = keyof (typeof ui & typeof example);
