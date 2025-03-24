"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedBorderTrail = ({
  children,
  className = "",
  contentClassName = "",
  trailColor = "white",
  borderWidth = 2,
  duration = 8
}) => {
  return (
    <div
      className={`relative p-[${borderWidth}px] ${className} `}
      style={{
        "--duration": `${duration}s`,
        "--angle": "0deg",
        background: `conic-gradient(from var(--angle), ${trailColor}, #A98AFF, #8A43E1, #DACFF8, ${trailColor})`,
      }}
    >
      <motion.div
        animate={{
          "--angle": "360deg",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `conic-gradient(from var(--angle), ${trailColor}, #A98AFF, #8A43E1, #DACFF8, ${trailColor})`,
        }}
      />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default AnimatedBorderTrail; 