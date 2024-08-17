import React from "react";

interface PageHeaderProps {
  title: string;
  heading: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  heading,
  description,
}) => {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <div className="-z-50 absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <p className="text-center font-space-grotesk mb-8 font-roboto font-bold uppercase text-xl">
        {title}
      </p>
      <h1 className="text-center lg:leading-10 mx-4 lg:mx-0">
        <span className="font-bold font-serif lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          {heading}
        </span>
      </h1>
      <p className="text-center font-space-grotesk w-full max-w-3xl mx-auto px-8 mt-8 text-sm md:text-md opacity-70 italic font-serif">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
