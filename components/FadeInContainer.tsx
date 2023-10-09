"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface FadeInContainerProps {
  children: React.ReactNode;
}

const FadeInContainer: FC<FadeInContainerProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.75 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInContainer;
