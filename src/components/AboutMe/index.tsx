import React from "react";
import { motion } from "framer-motion";

interface Props {}

export const AboutMe = (props: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="text-neutral-900 h-full w-full"></div>
      <div className="flex items-center h-full w-full">
        <motion.div
          className="rounded-s-full bg-slate-600 border border-slate-700 backdrop-blur-lg h-2/3 w-full"
          animate={{
            translateX: [1000, 0],
          }}
          transition={{
            duration: 0.62,
          }}
        ></motion.div>
      </div>
    </div>
  );
};
