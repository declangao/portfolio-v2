import { WorkExperience } from '@/types';
import { motion } from 'framer-motion';

export default function WorkExperienceTile({
  startDate,
  endDate,
  title,
  company,
  description,
  duties,
  tags,
}: WorkExperience) {
  return (
    <motion.div
      className="group grid grid-cols-8 gap-4 p-4 rounded-md hover:bg-slate-300/50 hover:dark:bg-slate-800/50"
      variants={{
        hidden: {
          y: -100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <div className="col-span-2 text-slate-500">
        {startDate} — {endDate}
      </div>
      <div className="col-span-6">
        <div className="mb-3 group-hover:text-sky-400">
          {title} • {company}
        </div>
        {description && <p className="text-slate-400 mb-4">{description}</p>}
        <ul className="text-slate-400 list-disc pl-4">
          {duties.map((duty, index) => (
            <li
              key={index}
              className="text-slate-500 group-hover:text-slate-700 group-hover:dark:text-slate-300"
            >
              {duty}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-sky-400/10 text-sky-400 dark:text-sky-300 group-hover:text-sky-500 rounded-full px-3 py-1"
            >
              <span className="">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
