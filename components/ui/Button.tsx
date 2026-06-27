import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = "primary", href, children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full transition-all duration-300";
  
  const variants = {
    primary: "border-transparent text-white bg-primary hover:bg-primary-light shadow-md hover:shadow-lg",
    secondary: "border-transparent text-primary bg-secondary hover:bg-secondary-light shadow-md hover:shadow-lg",
    outline: "border-primary text-primary bg-transparent hover:bg-primary hover:text-white"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
