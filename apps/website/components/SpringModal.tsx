import { AnimatePresence, motion } from "framer-motion";
import TabButton from "./gopx-buttons/TabButton";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { PuzzlePieceIcon } from "./icons";
import { toast, Toaster } from "react-hot-toast";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="-ml-1 pr-1 flex">
      <button onClick={() => setIsOpen(true)}>
        <PuzzlePieceIcon />
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const CustomInput = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textarea?: boolean;
}) => {
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
          value={value}
          onChange={onChange}
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          rows={4}
        ></textarea>
      ) : (
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) => {
  const [formData, setFormData] = useState({
    type: "",
    example: "",
    desc: "",
  });

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (
      formData.type === "" ||
      formData.desc === "" ||
      formData.example === ""
    ) {
      e.preventDefault();
      toast.error("Please fill in all fields.");
    } else {
      e.preventDefault();
      setIsSubmitting(true);

      const url =
        "https://script.google.com/macros/s/AKfycby3I8PaWQPT6g7Ex7iICG7J8tKAOfjsnQDTAVBVvVXkc51Qc_PJiHawrTKKe-AwFM-K9g/exec"; //v1.0.1

      try {
        const formBody = new URLSearchParams(formData);

        const response = await fetch(url, {
          method: "POST",
          body: formBody,
        });

        const finalRes = await response.text();
        console.log(finalRes);

        if (response.ok) {
          toast.success("Thank you for your suggestion!");
          setTimeout(() => {
            setIsOpen(false);
          }, 0);
        } else {
          toast.error("Failed to submit. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
        setFormData({
          type: "",
          example: "",
          desc: "",
        });
      }
    }
  };

  return (
    <AnimatePresence>
      <Toaster />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer any-modal"
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
              As we expand our library, we welcome your suggestions for
              intriguing animations and interactions to inspire us. While we
              can&apos;t promise anything, if we find it suitable, we&apos;ll
              develop it and keep you updated!
            </p>
            <form onSubmit={handleSubmit}>
              <CustomInput
                label="What type of component?*"
                id="type"
                value={formData.type}
                onChange={handleChange}
                placeholder='e.x. "Hero section"'
              />
              <CustomInput
                label="Link to an example"
                id="example"
                value={formData.example}
                onChange={handleChange}
                placeholder="www.website.com/cool-animation-here"
              />
              <CustomInput
                label="Explain the animation/interaction*"
                id="desc"
                value={formData.desc}
                onChange={handleChange}
                placeholder="If an idea, explain it as well as you can. If from an example site, something like 'the button at the top of the nav bar' will do."
                textarea={true}
              />
              <div className="flex flex-col sm:flex-row justify-between mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="mb-2 sm:mb-0 w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  type="button"
                >
                  Cancel
                </button>
                <TabButton
                  label={isSubmitting ? "Submitting..." : "Submit"}
                  onClick={() => handleSubmit}
                  className="py-2 px-4 text-md"
                />
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              🚀 DM at{" "}
              <a href="https://x.com/bettercallgopal" className="text-blue-600">
                @bettercallgopal
              </a>{" "}
              for preferred consideration.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
