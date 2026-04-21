"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type TextAnimationProps = {
  words: string[];
  interval?: number;
  className?: string;
};
export default function TextAnimation({
  words,
  interval = 3000,
  className
}: TextAnimationProps) {
  const [index, setIndex] = React.useState(0);

  // biome-ignore lint: "TODO: Fix this later"
  React.useEffect(() => {
    const animationInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    // Clean up interval on unmount
    return () => clearInterval(animationInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


}
