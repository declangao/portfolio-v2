'use client';

import ProjectTile from '@/app/_components/project-tile';
import { Button } from '@/components/ui/button';
import { projects } from '@/config';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Heading from './heading';

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <div className="pb-12">
      <Heading text="PROJECTS" center />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 py-12"
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
        whileInView="visible"
      >
        {featuredProjects.map((project) => (
          <ProjectTile
            key={project.name}
            image={project.thumbnail}
            text={project.name}
            slug={project.slug}
          />
        ))}
      </motion.div>

      <div className="text-center">
        <Link href="/projects" scroll={true}>
          <Button>
            Show More <ChevronRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
