import React from "react";

interface HoverFillCardProps {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const HoverFillCard: React.FC<HoverFillCardProps> = ({
  title,
  Icon,
}: HoverFillCardProps) => {
  return (
    <div className="w-full p-5 rounded-lg border-[1px] border-black/10 dark:border-white/10 relative overflow-hidden group dark:bg-white/5 bg-black/5 hover:cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="opacity-5 group-hover:opacity-30 absolute z-10 -top-12 -right-12 text-9xl group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#5271ff] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg group-hover:text-white relative z-10 duration-300 uppercase">
        {title}
      </h3>
    </div>
  );
};

export default HoverFillCard;
