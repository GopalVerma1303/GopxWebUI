import React from "react";
import FolderHoverButton from "@/components/ui/folder-hover-button";

const FolderHoverButtonDemo = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6 w-full h-full">
      <FolderHoverButton
        folderName="🗽 New York, USA"
        images={[
          "https://www.gopx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fllama-on-disk.6f858965.png&w=3840&q=75",
          "https://www.gopx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foctocat-programming.ba4330be.png&w=3840&q=75",
          "https://www.gopx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwin-crash-meme.5c68b41d.png&w=2048&q=75",
          "https://www.gopx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fllama-on-disk.6f858965.png&w=3840&q=75",
        ]}
      />
    </div>
  );
};

export default FolderHoverButtonDemo;
