import React, { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyableInputProps {
  defaultValue?: string;
  className?: string;
}

const CopyableInput = ({
  defaultValue = "",
  className = "",
}: CopyableInputProps) => {
  const [value, setValue] = useState(defaultValue);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`flex w-full max-w-[350px] ${className}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full font-mono p-2  border dark:border-white/50 border-black/50 rounded-tl rounded-bl focus:ring-0 focus:ring-offset-0"
      />
      <CopyToClipboard text={value} onCopy={handleCopy}>
        <button className="bg-black dark:bg-white bg-opacity-10 border-t border-r border-b border-black/50 dark:border-white text-black dar:text-white dark:text-black px-3 rounded-r transition">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyableInput;
