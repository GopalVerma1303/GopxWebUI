// components/FeatureCard.tsx
import Link from "next/link";
import { ReactNode, CSSProperties } from "react";

interface FeatureCardProps {
  id?: string;
  large?: boolean;
  centered?: boolean;
  href?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FeatureCard({
  id,
  large,
  centered,
  href,
  children,
  className,
  style,
}: FeatureCardProps) {
  const Component = href ? Link : "div";

  return (
    <Component
      href={href as string}
      className={`relative ${large ? "col-span-2" : ""} ${centered ? "flex flex-col justify-center items-center" : ""} ${className || ""}`}
      id={id}
      style={style}
    >
      {children}
    </Component>
  );
}
