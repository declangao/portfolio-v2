'use client';

import ImageCarousel from '@/components/image-carousel';
import { buttonVariants } from '@/components/ui/button';
import { projects } from '@/config';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const params = useParams();
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="h-full flex justify-center items-center flex-col md:flex-row gap-4 relative p-2 md:p-8 overflow-hidden">
      <Image
        src="/images/circle-spin.svg"
        alt="background spinning circle"
        width={600}
        height={600}
        className="absolute top-0 left-10 h-[500px] animate-slowSpin"
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12 w-full z-10">
        <div className="leading-8 w-full md:w-1/2">
          <h1 className="text-3xl pb-4">{project.name}</h1>
          <p>{project.description}</p>
          <ul className="list-disc ml-4">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2 mt-4">
            {project.techStack?.map((tech) => (
              <li
                key={tech}
                className="bg-sky-400/10 text-sky-400 dark:text-sky-300 rounded-full px-3 py-0"
              >
                <span className="">{tech}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                className={cn('cursor-pointer', buttonVariants())}
              >
                Preview
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                className={cn(
                  'cursor-pointer',
                  buttonVariants({ variant: 'secondary' })
                )}
              >
                Github
              </a>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 order-first md:order-last h-[200px] md:h-[400px] relative overflow-hidden">
          <ImageCarousel images={project.images} />
        </div>
      </div>
    </div>
  );
}
