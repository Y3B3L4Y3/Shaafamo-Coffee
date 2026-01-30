"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import ParallaxLayer from "./ParallaxLayer";

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  showCTA?: boolean;
  height?: "full" | "large" | "medium";
}

export default function Hero({
  title = "Shaafamo Coffee",
  imageSrc,
  videoSrc = "/images/hero-video.mp4",
  showCTA = true,
  height = "full",
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const heightClasses = {
    full: "h-screen min-h-[600px]",
    large: "h-[85vh] min-h-[500px]",
    medium: "h-[70vh] min-h-[400px]",
  };

  // Determine if we should show video or image
  const showVideo = Boolean(videoSrc) && height === "full";

  // Derive a .webm equivalent when possible (safe fallback)
  const webmSrc =
    typeof videoSrc === "string" && videoSrc.endsWith(".mp4")
      ? videoSrc.replace(/\.mp4$/i, ".webm")
      : undefined;

  return (
    <section
      ref={containerRef}
      className={`relative ${heightClasses[height]} overflow-hidden`}
    >
      {/* Background - Video or Image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {showVideo ? (
          // Video Background — prefer WebM then MP4 fallback
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={imageSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          // Image Background with Ken Burns Effect
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={imageSrc || "/images/farm-aerial-1.webp"}
              alt="Ethiopian coffee farm landscape"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      </motion.div>

      {/* Parallax Coffee Leaves */}
      <ParallaxLayer />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 h-0.5 bg-[#9AAC52] mx-auto mb-6"
          />

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <AnimatedButton href="/about" variant="primary" size="lg">
                Discover Our Story
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline" size="lg">
                Contact Us
              </AnimatedButton>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs uppercase tracking-widest">
              Scroll
            </span>
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
