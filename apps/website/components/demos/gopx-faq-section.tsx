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
  const [activeTab, setActiveTab] = useState<string>("Components");
  const [openQuestion, setOpenQuestion] = useState<string>(
    "What are the UI components you offer?",
  );

  const faqData: FAQData = {
    Components: [
      {
        question: "What are the UI components you offer?",
        answer:
          "We offer a wide range of pre-built UI components built with Tailwind CSS and Framer Motion, including buttons, cards, forms, navigation menus, and more.",
      },
      {
        question: "How can I use these components in my project?",
        answer:
          "Simply copy and paste the code for the components you need into your project, then customize the styles and functionality to match your design.",
      },
      {
        question: "Are the components responsive and mobile-friendly?",
        answer:
          "Yes, our components are designed to be fully responsive and optimized for both desktop and mobile devices.",
      },
      {
        question: "Can I modify the components to fit my branding?",
        answer:
          "Absolutely! The components are highly customizable, allowing you to easily change colors, fonts, and other styles to match your brand identity.",
      },
    ],
    Features: [
      {
        question: "What makes your components unique?",
        answer:
          "Our components are built with modern technologies like Tailwind CSS and Framer Motion, offering advanced features like animations, hover effects, and smooth scrolling.",
      },
      {
        question: "Do you provide documentation and support?",
        answer:
          "Yes, we offer comprehensive documentation and support to help you get started and troubleshoot any issues you may encounter.",
      },
      {
        question: "How often are new components added?",
        answer:
          "We regularly add new components and update existing ones to ensure you always have access to the latest design trends and best practices.",
      },
      {
        question: "Can I use these components in commercial projects?",
        answer:
          "Yes, our components are licensed for commercial use, allowing you to incorporate them into your client projects without any additional fees.",
      },
    ],
    Pricing: [
      {
        question: "How much do your components cost?",
        answer:
          "Our components are available at an affordable, one-time price, with no recurring fees or hidden costs.",
      },
      {
        question: "Do you offer any discounts or bundle deals?",
        answer:
          "Yes, we offer discounts for bulk purchases and bundle deals that include multiple component packs at a reduced price.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods, including credit cards, PayPal, and cryptocurrency, to make it easy for you to purchase our components.",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer:
          "We stand behind the quality of our components and offer a 30-day money-back guarantee if you're not completely satisfied with your purchase.",
      },
    ],
    Support: [
      {
        question: "What kind of support do you provide?",
        answer:
          "Our support team is available to assist you with any questions or issues you may have regarding our components, from installation to customization.",
      },
      {
        question: "How can I get in touch with your support team?",
        answer:
          "You can reach our support team via email, live chat, or our support forum, where you can also find answers to frequently asked questions.",
      },
      {
        question: "Do you offer any tutorials or guides?",
        answer:
          "Yes, we provide a variety of tutorials, guides, and code examples to help you get the most out of our components and learn best practices for web development.",
      },
      {
        question: "How quickly can I expect a response from your support team?",
        answer:
          "We strive to respond to all support inquiries within 24 hours, and we prioritize resolving any critical issues as quickly as possible.",
      },
    ],
  };

  return (
    <div className="mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 mt-12">FAQs</h2>
        <div className="flex justify-center space-x-1 sm:space-x-5 mb-8 w-fit mx-auto">
          {Object.keys(faqData).map((tab) => (
            <motion.button
              key={tab}
              className={`px-2 py-1 font-bold rounded-md text-xs sm:text-sm ${
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
