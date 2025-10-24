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
  const baseStyles = "px-4 py-2 rounded-xl";
  const variants = {
    primary: "button-hover-gradient hover:button-hover-gradient:hover",
    secondary:
      "button-secondary-gradient hover:button-secondary-gradient:hover",
    third: "button-third",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // 🔹 Case 1: href starts with "#" → scroll to section on same page
  if (href && href.startsWith("#")) {
    return (
      <a href={href} className={`${classes} inline-block`}>
        {children}
      </a>
    );
  }

  // 🔹 Case 2: Internal Next.js page
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={`${classes} inline-block`}>
        {children}
      </Link>
    );
  }

  // 🔹 Case 3: External link
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

  // 🔹 Default button
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
