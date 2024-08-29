import React from "react";
import { motion } from "framer-motion";

interface TabData {
  id: string;
  label: string;
}

interface LiftedTabProps {
  tabs: TabData[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const LiftedTab: React.FC<LiftedTabProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          className={`px-4 py-2 rounded-t-lg cursor-pointer transition-shadow duration-150 ease-in-out
            ${
              activeTab === tab.id
                ? "border-t border-l border-r border-black/15 dark:border-white/15 !shadow-[0_-2px_4px_rgba(0,0,0,0.1)] dark:!shadow-[0_-2px_4px_rgba(255,255,255,0.1)] bg-[#fafafa] dark:bg-[#1a1a1a]"
                : "border-b border-black/15 dark:border-white/15 bg-transparent"
            }
          `}
          onClick={() => setActiveTab(tab.id)}
          whileHover={{
            boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.15, ease: "easeInOut" },
          }}
        >
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
};

export default LiftedTab;
