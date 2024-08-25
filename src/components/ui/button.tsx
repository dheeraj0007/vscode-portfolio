import React from "react";

const StyledButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hover:bg-gray-500 w-fit cursor-pointer">{children}</div>
  );
};

export default StyledButton;
