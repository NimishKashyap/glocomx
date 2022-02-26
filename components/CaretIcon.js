import { motion } from "framer-motion";
import React from "react";

function CaretIcon({ className, selected }) {

  return (
    <motion.svg
      animate={{
        rotate : selected ? "180deg" : "0deg"
      }}
      className={`${className}`}
      width="16px"
      height="16px"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke= "#FFC300" 
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export default CaretIcon;
