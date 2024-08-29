import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiftedTab from "@/components/ui/lifted-tab";

interface TabData {
  id: string;
  label: string;
  content: string;
}

const tabs: TabData[] = [
  { id: "1", label: "npm", content: "npm install gopx-webui" },
  { id: "2", label: "yarn", content: "yarn add gopx-webui" },
  { id: "3", label: "pnpm", content: "pnpm add gopx-webui" },
  { id: "4", label: "bun", content: "bun add gopx-webui" },
];

const LiftedTabDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="p-6 rounded-lg bg-[#fafafa] dark:bg-[#1a1a1a] border border-black/15 dark:border-white/15">
      <LiftedTab
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="p-4 rounded-b-lg text-gray-800 dark:text-gray-200"
        >
          <code className="opacity-70">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </code>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LiftedTabDemo;
