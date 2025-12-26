"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CoffeeLeafSVG from "./CoffeeLeafSVG";

interface ParallaxLayerProps {
  intensity?: "light" | "medium" | "heavy";
}

export default function ParallaxLayer({ intensity = "medium" }: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const intensityMultiplier = {
    light: 0.3,
    medium: 0.5,
    heavy: 0.7,
  };

  const mult = intensityMultiplier[intensity];

  // Different parallax speeds for depth effect
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * mult}%`]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", `${150 * mult}%`]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", `${80 * mult}%`]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", `${120 * mult}%`]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["0%", `${60 * mult}%`]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {/* Top Left Leaf */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-10 -left-10 opacity-20"
      >
        <CoffeeLeafSVG
          variant="leaf1"
          className="w-32 sm:w-40 md:w-48 h-auto text-leaf-green animate-leaf-float"
        />
      </motion.div>

      {/* Top Right Leaf */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -top-5 -right-5 opacity-15"
      >
        <CoffeeLeafSVG
          variant="leaf2"
          className="w-28 sm:w-36 md:w-44 h-auto text-leaf-green-light animate-leaf-float stagger-2"
        />
      </motion.div>

      {/* Middle Left Bean */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/3 -left-5 opacity-10"
      >
        <CoffeeLeafSVG
          variant="bean"
          className="w-16 sm:w-20 md:w-24 h-auto text-coffee-brown animate-leaf-float stagger-3"
        />
      </motion.div>

      {/* Middle Right Leaf */}
      <motion.div
        style={{ y: y4, rotate: rotate3 }}
        className="absolute top-1/2 -right-8 opacity-15"
      >
        <CoffeeLeafSVG
          variant="leaf3"
          className="w-24 sm:w-32 md:w-40 h-auto text-leaf-green animate-leaf-float stagger-1"
        />
      </motion.div>

      {/* Bottom Left Leaf */}
      <motion.div
        style={{ y: y5 }}
        className="absolute bottom-1/4 -left-12 opacity-10"
      >
        <CoffeeLeafSVG
          variant="leaf2"
          className="w-36 sm:w-44 md:w-52 h-auto text-leaf-green-dark animate-leaf-float stagger-4"
        />
      </motion.div>

      {/* Bottom Right Bean */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/3 right-10 opacity-10"
      >
        <CoffeeLeafSVG
          variant="bean"
          className="w-12 sm:w-16 md:w-20 h-auto text-earth-brown animate-leaf-float stagger-5"
        />
      </motion.div>

      {/* Extra floating elements for depth */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 opacity-5"
      >
        <CoffeeLeafSVG
          variant="leaf1"
          className="w-20 h-auto text-leaf-green animate-leaf-float stagger-2"
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/2 right-1/4 opacity-5"
      >
        <CoffeeLeafSVG
          variant="bean"
          className="w-14 h-auto text-coffee-brown animate-leaf-float stagger-4"
        />
      </motion.div>
    </div>
  );
}

