import { HTMLProps } from "react";

interface CheckeredBackgroundProps {
  color: string;
  cellSize: string | number;
  strokeWidth: number | string;
  className?: string;
  fade?: boolean;
}

const CheckeredBackground = ({
  color = "#5271ff",
  cellSize = "25px",
  strokeWidth = "3px",
  className,
  fade = true,
  ...props
}: Partial<CheckeredBackgroundProps> & HTMLProps<HTMLDivElement>) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 0 0 L 200 200'/>
      <path d='M 200 0 L 0 200'/>
    </svg>
  `;
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return (
    <div
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: "repeat",
        backgroundSize: cellSize,
        maskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}
      {...props}
    ></div>
  );
};

export default CheckeredBackground;
