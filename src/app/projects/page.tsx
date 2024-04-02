'use client';

import { projects } from '@/config';
import { motion } from 'framer-motion';
import ProjectCard from './_components/project-card';

export default function ProjectsPage() {
  return (
    <div className="pt-12 mb-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Projects I Worked On
      </h1>
      <motion.ul
        className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8 list-none"
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
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard
              name={project.name}
              slug={project.slug}
              image={project.thumbnail}
              description={project.description}
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
