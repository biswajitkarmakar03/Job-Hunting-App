import React from "react";

export const Button = ({ children, variant = "default", ...props }) => {
  const base = "px-4 py-2 rounded-md font-medium";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    link: "text-blue-600 underline hover:text-blue-800",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
