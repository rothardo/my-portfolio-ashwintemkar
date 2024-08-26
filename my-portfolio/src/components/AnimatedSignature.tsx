'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Signature from "@/components/Signature";

const draw = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        delay: 0.2,
        type: "spring",
        duration: 2.5,
        bounce: 0.2,
        ease: "easeInOut",
      },
      opacity: { duration: 2 },
    },
  },
};

const AnimatedSignature = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <motion.div ref={ref}>
      <motion.svg
        width="1196"
        height="655"
        viewBox="0 0 1196 655"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.path
          d="M26.8458 57...849 1116.78 75.4613"
          stroke="black"
          strokeWidth="16"
          strokeLinecap="round"
          variants={draw}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedSignature;
