"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
  className?: string;
  animated?: boolean;
}

// Brand colors from the logo
const BRAND = {
  beanBrown: "#5D2E1F",
  leafOlive: "#7B8B3D",
  leafLight: "#9AAC52",
  cream: "#FDFBF7",
};

const SIZES = {
  sm: { icon: 40, text: "text-lg", subtext: "text-[8px]" },
  md: { icon: 56, text: "text-2xl", subtext: "text-[10px]" },
  lg: { icon: 72, text: "text-3xl", subtext: "text-xs" },
  xl: { icon: 96, text: "text-4xl", subtext: "text-sm" },
};

export default function Logo({
  variant = "full",
  size = "md",
  theme = "dark",
  className = "",
  animated = true,
}: LogoProps) {
  const s = SIZES[size];
  
  const colors = theme === "light"
    ? { text: BRAND.cream, subtext: BRAND.leafLight }
    : { text: BRAND.beanBrown, subtext: BRAND.leafOlive };

  // Icon element
  const iconElement = (
    <Image
      src="/images/logo.png"
      alt="Shaafamo Coffee"
      width={s.icon}
      height={s.icon}
      className="flex-shrink-0 object-contain"
      priority
    />
  );

  // Text element
  const textElement = (
    <div className="flex flex-col leading-none">
      <span
        className={`font-serif font-bold tracking-wide ${s.text}`}
        style={{ color: colors.text }}
      >
        Shaafamo
      </span>
      <span
        className={`font-semibold tracking-[0.2em] uppercase ${s.subtext}`}
        style={{ color: colors.subtext }}
      >
        COFFEE
      </span>
    </div>
  );

  // Render content based on variant
  const content = (() => {
    switch (variant) {
      case "icon":
        return iconElement;
      case "text":
        return textElement;
      case "full":
      default:
        return (
          <div className="flex items-center gap-3">
            {iconElement}
            {textElement}
          </div>
        );
    }
  })();

  if (animated) {
    return (
      <motion.div
        className={`inline-flex ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={`inline-flex ${className}`}>{content}</div>;
}

// Simple logo for navigation - just the image
export function LogoStacked({
  theme = "light",
  size = "md",
  className = "",
}: {
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: 36,
    md: 48,
    lg: 64,
  };

  const colors = theme === "light"
    ? { text: BRAND.cream, subtext: BRAND.leafLight }
    : { text: BRAND.beanBrown, subtext: BRAND.leafOlive };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Shaafamo Coffee"
        width={sizes[size]}
        height={sizes[size]}
        className="object-contain"
        priority
      />
      <div className="flex flex-col leading-none">
        <span
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight"
          style={{ color: colors.text }}
        >
          Shaafamo
        </span>
        <span
          className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold"
          style={{ color: colors.subtext }}
        >
          COFFEE
        </span>
      </div>
    </div>
  );
}
