"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * شريط تقدّم القراءة — يبدأ من اليمين (RTL) ويتوهج ذهبياً مع التمرير
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-right bg-gradient-to-l from-accent via-primary to-accent"
      style={{ scaleX }}
    />
  );
}
