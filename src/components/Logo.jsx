import * as React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Logo = () => (
  <div className="logo-container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="logo-container_item"
    >
      <motion.path
        // d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        d="M20 10 Q50 10, 80 10 Q90 10, 90 20 L90 30 Q90 40, 80 40 L60 40 L60 90 Q60 95, 50 95 Q40 95, 40 90 L40 40 L20 40 Q10 40, 10 30 L10 20 Q10 10, 20 10 Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
);

export default Logo;
