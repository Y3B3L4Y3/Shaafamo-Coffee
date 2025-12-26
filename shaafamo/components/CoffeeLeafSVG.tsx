"use client";

interface CoffeeLeafSVGProps {
  className?: string;
  variant?: "leaf1" | "leaf2" | "leaf3" | "bean";
}

export default function CoffeeLeafSVG({
  className = "w-24 h-24",
  variant = "leaf1",
}: CoffeeLeafSVGProps) {
  if (variant === "bean") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
      >
        <ellipse cx="50" cy="50" rx="25" ry="40" />
        <path
          d="M50 15 Q45 50 50 85"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>
    );
  }

  if (variant === "leaf2") {
    return (
      <svg
        viewBox="0 0 100 150"
        className={className}
        fill="currentColor"
      >
        <path d="M50 0 C20 30 10 70 20 100 C30 130 50 150 50 150 C50 150 70 130 80 100 C90 70 80 30 50 0 Z" />
        <path
          d="M50 20 L50 140 M30 50 L50 70 M70 50 L50 70 M35 80 L50 95 M65 80 L50 95 M40 110 L50 120 M60 110 L50 120"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
      </svg>
    );
  }

  if (variant === "leaf3") {
    return (
      <svg
        viewBox="0 0 120 100"
        className={className}
        fill="currentColor"
      >
        <path d="M10 50 Q30 10 60 10 Q90 10 110 50 Q90 90 60 90 Q30 90 10 50 Z" />
        <path
          d="M20 50 L100 50 M40 30 L60 50 L40 70 M80 30 L60 50 L80 70"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
      </svg>
    );
  }

  // Default leaf1
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      fill="currentColor"
    >
      <path d="M50 0 C15 25 0 60 10 95 C20 130 45 150 50 150 C55 150 80 130 90 95 C100 60 85 25 50 0 Z" />
      <path
        d="M50 15 L50 140"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M25 45 Q40 55 50 50 M75 45 Q60 55 50 50 M30 75 Q42 82 50 78 M70 75 Q58 82 50 78 M35 105 Q45 110 50 107 M65 105 Q55 110 50 107"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
      />
    </svg>
  );
}

