import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  accordion: {
    name: "accordion",
    type: "components:ui",
    files: ["registry/components/ui/accordion.tsx"],
  },
  "ghost-label": {
    name: "ghost-label",
    type: "components:ui",
    files: ["registry/components/ui/ghost-label.tsx"],
  },
  "tab-button": {
    name: "tab-button",
    type: "components:ui",
    files: ["registry/components/ui/tab-button.tsx"],
  },
};

const example: Registry = {
  "gopx-accordion": {
    name: "gopx-accordion",
    type: "components:example",
    registryDependencies: ["accordion"],
    files: ["registry/components/example/gopx-accordion.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/gopx-accordion"),
    ),
  },
};

export const registry: Registry = {
  ...ui,
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
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
