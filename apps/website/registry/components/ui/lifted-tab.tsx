import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabData {
  id: string;
  label: string;
  content: string;
}

const tabs: TabData[] = [
  { id: "1", label: "Tab 1", content: "Tab content 1" },
  { id: "2", label: "Tab 2", content: "Tab content 2" },
  { id: "3", label: "Tab 3", content: "Tab content 3" },
];

const LiftedTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="bg-white text-gray-700 p-2 sm:p-4 rounded-lg">
      <div className="flex flex-wrap relative">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-t-3xl mr-1 focus:outline-none relative ${
              activeTab === tab.id
                ? " z-10 border border-black rounded-tl-lg rounded-tr-lg"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-t-3xl"
            }`}
            style={{
              boxShadow:
                activeTab === tab.id
                  ? "0px -4px 6px 0px rgba(0, 0, 0, 0.1)"
                  : "none",
            }}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 rounded-b-xl "
                layoutId="activeTabLine"
              />
            )}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          // initial={{ opacity: 0, y: 10 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -10 }}
          // transition={{ duration: 0.2 }}
          className="px-4 pb-4 rounded-b-lg border border-black "
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LiftedTab;
