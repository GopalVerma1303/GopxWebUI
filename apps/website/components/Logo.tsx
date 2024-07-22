import React from "react";

type LogoProps = {
  name: string;
  initials: string;
};

const Logo: React.FC<LogoProps> = ({ name, initials }: LogoProps) => {
  return (
    <div className="opacity-85">
      <p className="text-3xl hidden sm:inline font-bold font-anton">{name}</p>
      <p className="sm:hidden text-3xl uppercase font-bold font-anton">
        {initials}
      </p>
    </div>
  );
};

export default Logo;
