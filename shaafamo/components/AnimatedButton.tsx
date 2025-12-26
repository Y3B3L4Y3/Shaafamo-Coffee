"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-leaf-green text-white hover:bg-leaf-green-light btn-glow",
    secondary:
      "bg-espresso text-cream hover:bg-espresso-light shadow-lg shadow-espresso/20",
    outline:
      "border-2 border-white/80 text-white hover:bg-white hover:text-espresso backdrop-blur-sm",
    ghost:
      "text-leaf-green hover:bg-leaf-green/10",
    gold:
      "bg-gold text-espresso hover:bg-gold-light btn-gold font-semibold",
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {/* Shine Effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      </span>
      
      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="group"
    >
      {buttonContent}
    </button>
  );
}

