import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Open Modal
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const CustomInput = ({ label, id, placeholder, textarea = false }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          rows="4"
        ></textarea>
      ) : (
        <input
          type="text"
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 dark:bg-opacity-70"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800 overflow-y-auto max-h-[90vh]"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Suggest a component
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              As we build out our library, we'd love your input on interesting
              animations & interactions we could use for inspiration. No
              guarantees, but if we think it's a fit, we'll build it out and let
              you know!
            </p>
            <form>
              <CustomInput
                label="What type of component?*"
                id="componentType"
                placeholder='e.x. "Hero section"'
              />
              <CustomInput
                label="Link to an example"
                id="exampleLink"
                placeholder="www.website.com/cool-animation-here"
              />
              <CustomInput
                label="Explain the animation/interaction*"
                id="explanation"
                placeholder="If an idea, explain it as well as you can. If from an example site, something like 'the button at the top of the nav bar' will do."
                textarea={true}
              />
              <div className="flex flex-col sm:flex-row justify-between mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="mb-2 sm:mb-0 w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              ⚡ Pro users get preferred consideration
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
