'use client';

import { motion } from 'framer-motion';

type Props = {
  image: string;
  text: string;
  directionLeft?: boolean;
};

export default function Skill({ image, text, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        src={image}
        alt={text}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded-full z-0 group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex justify-center items-center h-full">
          <p className="text-xl font-bold text-black opacity-100">{text}</p>
        </div>
      </div>
    </div>
  );
}
