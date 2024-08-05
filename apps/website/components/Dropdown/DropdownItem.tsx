import React from "react";

interface DropdownItemProps<T> {
  option: T;
  onClick: () => void;
  children: React.ReactNode;
}

function DropdownItem<T>({ option, onClick, children }: DropdownItemProps<T>) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-2 text-sm dark:text-white text-black hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-150"
    >
      {children}
    </button>
  );
}

export default DropdownItem;
