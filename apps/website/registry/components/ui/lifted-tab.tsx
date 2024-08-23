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

const BrowserLikeTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="p-4 rounded-lg">
      <div className="flex">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            style={{
              ...(activeTab === tab.id && {
                borderTop: "1px solid #d3d3d3",
                borderLeft: "1px solid #d3d3d3",
                borderRight: "1px solid #d3d3d3",
                boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
              }),
              ...(activeTab !== tab.id && {
                borderBottom: "1px solid #d3d3d3",
              }),
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
            className={`px-4 py-2 focus:outline-none`}
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
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="p-4 rounded-b-lg"
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BrowserLikeTab;
