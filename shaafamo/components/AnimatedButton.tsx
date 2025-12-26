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
  const baseStyles = `
    relative inline-flex items-center justify-center font-medium rounded-full 
    transition-all duration-300 ease-out overflow-hidden
    focus:outline-none focus:ring-2 focus:ring-offset-2
    active:scale-[0.98]
  `;

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  // Primary button uses #7B8B3D (leaf olive green)
  const variantStyles = {
    primary: `
      bg-[#7B8B3D] text-white font-semibold
      hover:bg-[#8B9B4D] hover:shadow-lg hover:shadow-[#7B8B3D]/25
      focus:ring-[#7B8B3D]/50
      active:bg-[#6B7B2D]
      shadow-md shadow-[#7B8B3D]/20
    `,
    secondary: `
      bg-[#5D2E1F] text-[#FDFBF7] font-medium
      hover:bg-[#7A4332] hover:shadow-lg hover:shadow-[#5D2E1F]/25
      focus:ring-[#5D2E1F]/50
      active:bg-[#4D1E0F]
      shadow-md shadow-[#5D2E1F]/20
    `,
    outline: `
      border-2 border-white/80 text-white font-medium backdrop-blur-sm
      hover:bg-white hover:text-[#5D2E1F] hover:border-white
      focus:ring-white/50
      active:bg-white/90
    `,
    ghost: `
      text-[#7B8B3D] font-medium
      hover:bg-[#7B8B3D]/10
      focus:ring-[#7B8B3D]/30
      active:bg-[#7B8B3D]/20
    `,
    gold: `
      bg-gradient-to-r from-[#B8956E] to-[#A07D56] text-white font-semibold
      hover:from-[#C8A57E] hover:to-[#B08D66] hover:shadow-lg hover:shadow-[#B8956E]/30
      focus:ring-[#B8956E]/50
      active:from-[#A88560] active:to-[#906D46]
      shadow-md shadow-[#B8956E]/25
    `,
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        ${className} 
        ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
      `}
    >
      {/* Shine Effect on Hover */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span 
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
          group-hover:translate-x-full transition-transform duration-700 ease-out" 
        />
      </span>
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className="group inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="group inline-block"
      aria-disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}
