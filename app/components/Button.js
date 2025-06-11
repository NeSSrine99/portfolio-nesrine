import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles = "px-4 py-2 rounded-xl";

  const variants = {
    primary: "button-hover-gradient",
    secondary: "button-secondary-gradient",
    third: "button-third",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
