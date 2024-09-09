"use client";

import React from "react";
import { SliceZone, SliceZoneLike, SliceLike } from "@prismicio/react";
import { components } from "@/slices";
import { motion } from "framer-motion";

type HomeContentProps = {
  slices: SliceZoneLike<SliceLike<string>> | undefined;
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const HomeContent: React.FC<HomeContentProps> = ({ slices }) => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <SliceZone slices={slices} components={components} />
    </motion.main>
  );
};
