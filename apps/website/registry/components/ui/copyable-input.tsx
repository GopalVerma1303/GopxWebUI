import React, { useState, useEffect } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyableInputProps {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  editable?: boolean;
  spellcheck?: boolean;
}

const CopyableInput = ({
  value,
  onChange,
  className = "",
  editable = true,
  spellcheck = false,
}: CopyableInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`flex w-full ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        readOnly={!editable}
        spellCheck={spellcheck}
        className={`w-full font-mono p-2 border dark:border-white/50 border-black/50 rounded-tl rounded-bl focus:ring-0 focus:ring-offset-0`}
      />
      <CopyToClipboard text={inputValue} onCopy={handleCopy}>
        <button className="bg-black dark:bg-white bg-opacity-10 border-t border-r border-b border-black/50 dark:border-white text-black dar:text-white dark:text-black px-3 rounded-r transition">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyableInput;
