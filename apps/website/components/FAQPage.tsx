import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

export const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Web");
  const [openQuestion, setOpenQuestion] = useState<string>(
    "What is web development?",
  );

  const faqData: FAQData = {
    Web: [
      {
        question: "What is web development?",
        answer:
          "Web development is the process of building and maintaining websites. It involves various aspects including web design, web programming, and database management.",
      },
      {
        question: "How do I know if I need it?",
        answer:
          "If you want to establish an online presence, promote your business, or create an application, web development is essential.",
      },
      {
        question: "What does it cost?",
        answer:
          "The cost of web development can vary widely based on the complexity of the project, ranging from a few hundred to several thousand dollars.",
      },
      {
        question: "What about SEO?",
        answer:
          "SEO, or Search Engine Optimization, is crucial for improving your website's visibility in search engines. Our components are designed to be SEO-friendly.",
      },
    ],
    Mobile: [
      {
        question: "What is mobile app development?",
        answer:
          "Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets.",
      },
      {
        question: "What platforms do you support?",
        answer:
          "We support both iOS and Android platforms, allowing you to reach a wider audience.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "The timeline for mobile app development can vary based on complexity, but it typically ranges from a few weeks to several months.",
      },
      {
        question: "What are the costs involved in mobile app development?",
        answer:
          "Costs can vary significantly based on features and design, often ranging from a few thousand to tens of thousands of dollars.",
      },
    ],
    "UI/UX": [
      {
        question: "What is UI/UX design?",
        answer:
          "UI (User Interface) design focuses on the layout and visual elements of a product, while UX (User Experience) design focuses on the overall experience a user has with a product.",
      },
      {
        question: "Why is UI/UX design important?",
        answer:
          "Good UI/UX design enhances user satisfaction, increases engagement, and drives conversions.",
      },
      {
        question: "How do you ensure a good user experience?",
        answer:
          "We conduct user research, usability testing, and iterative design processes to ensure our designs meet user needs.",
      },
      {
        question: "Can you help with redesigning existing interfaces?",
        answer:
          "Yes, we offer services to redesign and improve existing interfaces for better usability and aesthetics.",
      },
    ],
    Copywriting: [
      {
        question: "What is copywriting?",
        answer:
          "Copywriting is the art of writing persuasive text for marketing and advertising purposes, aimed at encouraging the reader to take action.",
      },
      {
        question: "Why is copywriting important for my business?",
        answer:
          "Effective copywriting can significantly impact your marketing efforts, helping to attract and convert potential customers.",
      },
      {
        question: "Do you offer SEO copywriting services?",
        answer:
          "Yes, we provide SEO copywriting services that help improve your website's visibility in search engines while engaging your audience.",
      },
      {
        question: "What types of copywriting do you specialize in?",
        answer:
          "We specialize in website copy, product descriptions, blog posts, and social media content.",
      },
    ],
  };

  return (
    <div className="min-h-screen mt-[50px]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-1 mb-8 w-fit mx-auto">
          {Object.keys(faqData).map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 font-bold rounded-md text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600"
                  : "text-black/50 dark:text-white/50"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <div className="space-y-4">
          {faqData[activeTab].map((item) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border dark:border-white/20 border-black/20 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full text-left p-4 flex justify-between items-center font-bold"
                onClick={() =>
                  setOpenQuestion(
                    openQuestion === item.question ? "" : item.question,
                  )
                }
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: openQuestion === item.question ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </motion.button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openQuestion === item.question ? "auto" : 0,
                  opacity: openQuestion === item.question ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 border-t dark:border-white/20 border-black/20 text-black/70 dark:text-white/70">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
