import React from "react";
import Showcase from "@/components/Showcase";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white/20 bg-grid-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white/20"></div>
      <h1 className="text-2xl mb-8 font-bold">GOPX Playground</h1>
      <Showcase>
        <div className="h-full w-full rounded-lg "></div>
      </Showcase>
    </div>
  );
};

export default Home;
