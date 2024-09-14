"use client";

import React from "react";
import ShimmerText from "@/components/ui/shimmer-text";

const LoadingTextAnimationDemo = () => {
  const phrases = [
    "conquering",
    "commanding",
    "asserting",
    "dominating",
    "overcoming",
    "strategizing",
  ];

  return (
    <div className=" flex items-center justify-center ">
      <ShimmerText phrases={phrases} />
    </div>
  );
};

export default LoadingTextAnimationDemo;
