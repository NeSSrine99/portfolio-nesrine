import React from "react";
import Link from "next/link";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  href,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 ease-in-out transform";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-300 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-purple-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 hover:from-teal-400 hover:via-green-400 hover:to-blue-400 shadow-md hover:shadow-lg",
    third: "bg-gray-800 text-white hover:bg-gray-700 shadow hover:shadow-md",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href && href.startsWith("#")) {
    return (
      <a href={href} className={`${classes} inline-block`}>
        {children}
      </a>
    );
  }

  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={`${classes} inline-block`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${classes} inline-block`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
