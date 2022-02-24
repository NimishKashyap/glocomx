import { motion } from "framer-motion";
import React from "react";

function Button({ children, className }) {
  return (
    <motion.button
      animate={{ borderRadius: "3rem" }}
      whileHover={{
        backgroundColor: "rgba(255, 220, 0)",
        scale: 1.05,
        borderRadius: "1rem",
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default Button;
