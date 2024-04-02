'use client';

import { motion } from 'framer-motion';
import VideoCarousel from './_components/video-carousel';

const itemVariantsLeft = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const itemVariantsRight = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function AboutPage() {
  // h-[calc(100vh-12rem)]
  return (
    <motion.div
      className="py-4 md:py-8 flex justify-center items-center flex-col lg:flex-row gap-4"
      variants={{
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
    >
      <div className="font-medium leading-[2rem]">
        <motion.h3 className="text-5xl mb-8" variants={itemVariantsLeft}>
          Hi there
          <span className="animate-wave origin-[70%_70%] inline-block">👋</span>
        </motion.h3>

        <motion.p className="mb-2" variants={itemVariantsLeft}>
          I am <span className="text-primary">Declan Gao</span>, a{' '}
          <span className="text-primary">frontend/fullstack developer</span>{' '}
          based in <span className="text-primary">Toronto, Canada</span>.
          Originally born in China, I moved to New Zealand when I was young and
          now I call Canada home.
        </motion.p>

        {/* <motion.p className="mb-2" variants={itemVariantsLeft}>
          Being a top graduate, I hold{' '}
          <span className="text-primary">Postgraduate Diploma</span> and{' '}
          <span className="text-primary">Bachelor degree</span> in{' '}
          <span className="text-primary">Computer Science</span> from{' '}
          <span className="text-primary">The University of Waikato</span> and{' '}
          <span className="text-primary">Waikato Institute of Technology</span>.
        </motion.p> */}

        <motion.p className="mb-2" variants={itemVariantsLeft}>
          Having worked in numerous countries in the last decade, I&apos;m a
          seasoned frontend developer mainly focused on{' '}
          <span className="text-primary">React</span> and{' '}
          <span className="text-primary">Vue</span>. I&apos;m also a big fan of{' '}
          <span className="text-primary">Flutter</span> when it comes to mobile
          app development.
        </motion.p>

        <motion.p variants={itemVariantsLeft}>
          Apart from programming, here are some other things I love:
        </motion.p>

        <ul className="list-disc pl-4">
          <motion.li variants={itemVariantsLeft}>
            Hiking in the great outdoor
          </motion.li>
          <motion.li variants={itemVariantsLeft}>
            Aerial photography with my trusted DJI Mini 2 drone
          </motion.li>
          <motion.li variants={itemVariantsLeft}>
            Everything gadget and tech
          </motion.li>
          <motion.li variants={itemVariantsLeft}>Video games</motion.li>
        </ul>
      </div>

      <motion.div
        className="w-full lg:w-1/2 flex flex-col"
        variants={itemVariantsRight}
      >
        <h3 className="text-center">Emjoy some of my drone videos 👇</h3>
        <VideoCarousel />
      </motion.div>
    </motion.div>
  );
}
