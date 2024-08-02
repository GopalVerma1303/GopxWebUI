import React, { useState, useRef, useEffect } from "react";

type TextTooltipProps = {
  text: string;
  hoverMessage?: string;
  children?: React.ReactNode;
};

const TextTooltip: React.FC<TextTooltipProps> = ({
  text,
  hoverMessage,
  children,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      if (linkRef.current && tooltipRef.current) {
        const linkRect = linkRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - linkRect.left,
          y: e.clientY - linkRect.top - tooltipRect.height - 10,
        });
      }
    };

    if (isHovering) {
      document.addEventListener("mousemove", handleMouseMove);
      timeoutId = setTimeout(() => setIsVisible(true), 50);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      setIsVisible(false);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isHovering]);

  return (
    <div
      ref={linkRef}
      className="inline-block relative w-full hover:cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children || text}
      {isHovering && hoverMessage && (
        <div
          ref={tooltipRef}
          className={`absolute bg-[#ffffff] dark:bg-[#111111] border border-black/10 dark:border-white/20 p-3 rounded shadow-lg z-10 w-64 transition-opacity duration-200 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          <p className="text-sm opacity-70 font-light">{hoverMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextTooltip;
