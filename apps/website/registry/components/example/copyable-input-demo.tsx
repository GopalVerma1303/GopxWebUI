import React from "react";
import CopyableInput from "@/components/ui/copyable-input";

const CopyableInputDemo: React.FC = () => {
  return (
    <div className="w-full max-w-[350px]">
      <CopyableInput value="npm install -g gopx-webui" />
    </div>
  );
};

export default CopyableInputDemo;
