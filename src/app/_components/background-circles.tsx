'use client';

import { motion } from 'framer-motion';

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
      aria-hidden="true"
    >
      <div className="border border-[#ccc] rounded-full h-[200px] w-[200px] absolute mt-52 animate-ping" />
      <div className="border border-[#ccc] rounded-full h-[300px] w-[300px] absolute mt-52" />
      {/* <div className="border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-52" /> */}
      <div className="border border-[#F7AB0A] opacity-20 rounded-full h-[500px] w-[500px] absolute mt-52 animate-pulse" />
      <div className="border border-[#ccc] rounded-full h-[650px] w-[650px] absolute mt-52" />
    </motion.div>
  );
}
