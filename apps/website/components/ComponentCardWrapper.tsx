import React, { ReactNode } from "react";

interface ComponentCardWrapperProps {
  children: ReactNode;
}

const ComponentCardWrapper: React.FC<ComponentCardWrapperProps> = ({
  children,
}) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default ComponentCardWrapper;
