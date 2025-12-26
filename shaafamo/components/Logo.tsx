"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  isScrolled?: boolean;
}

export default function Logo({ className = "", variant = "full", isScrolled = false }: LogoProps) {
  const colorPrimary = isScrolled ? "var(--cream)" : "var(--white)";
  const colorSecondary = "var(--leaf-olive)";
  const colorBean = "var(--coffee-bean)";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        {/* SVG Logo Mark */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Aroma/Steam lines */}
          <path d="M42 15C42 15 45 10 42 5" stroke={colorBean} strokeWidth="2" strokeLinecap="round" />
          <path d="M50 18C50 18 53 10 50 2" stroke={colorBean} strokeWidth="2" strokeLinecap="round" />
          <path d="M58 15C58 15 61 10 58 5" stroke={colorBean} strokeWidth="2" strokeLinecap="round" />
          
          {/* Coffee Bean */}
          <ellipse cx="50" cy="45" rx="22" ry="30" fill={colorBean} transform="rotate(-15 50 45)" />
          <path d="M35 55C40 50 60 40 65 35" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
          
          {/* Laurel Wreath / Leaves */}
          <path d="M25 65C15 55 15 35 25 25M75 65C85 55 85 35 75 25" stroke={colorSecondary} strokeWidth="2" strokeLinecap="round" />
          {[...Array(6)].map((_, i) => (
            <g key={i}>
              <circle cx={20 - i*2} cy={30 + i*8} r="3" fill={colorSecondary} />
              <circle cx={80 + i*2} cy={30 + i*8} r="3" fill={colorSecondary} />
            </g>
          ))}
          <path d="M35 75C40 80 60 80 65 75" stroke={colorSecondary} strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {variant === "full" && (
        <div className="flex flex-col">
          <span className={`font-serif text-xl sm:text-2xl font-bold tracking-[0.1em] transition-colors duration-500 ${isScrolled ? "text-cream" : "text-white"}`}>
            Shaafamo
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-semibold text-leaf-olive -mt-1">
            Coffee
          </span>
        </div>
      )}
    </div>
  );
}

