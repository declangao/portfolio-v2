'use client';

import { experience } from '@/config';
import { motion } from 'framer-motion';
import WorkExperienceTile from './_components/work-experience-tile';

export default function ExperiencePage() {
  return (
    <div className="pt-12 flex flex-col items-center mb-20">
      <h1 className="text-4xl text-center mb-8">My Work Experience</h1>

      <motion.ul
        className="w-full md:w-2/3"
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
        animate="visible"
      >
        {experience.map((exp) => (
          <li key={exp.title}>
            <WorkExperienceTile
              startDate={exp.startDate}
              endDate={exp.endDate}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              duties={exp.duties}
              tags={exp.tags}
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
