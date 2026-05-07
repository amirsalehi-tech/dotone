import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

function Button({children, className = "", ...props}: ButtonProps) {
  return (
    <button
      className={`inline-flex justify-center items-center focus:outline-none font-medium cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
