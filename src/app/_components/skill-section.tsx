'use client';

import { motion } from 'framer-motion';
import Heading from './heading';
import Skill from './skill';

export default function SkillSection() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col justify-start mx-auto items-center pb-20"
    >
      <Heading text="SKILLS" center />

      <div className="grid grid-cols-4 gap-1 md:gap-6 pt-12">
        <Skill image="/images/logos/react.png" text="React" directionLeft />
        <Skill image="/images/logos/nextjs.png" text="Next.js" directionLeft />
        <Skill image="/images/logos/vue.png" text="Vue" directionLeft />
        <Skill
          image="/images/logos/typescript.png"
          text="TypeScript"
          directionLeft
        />

        <Skill image="/images/logos/flutter.png" text="Flutter" />
        <Skill image="/images/logos/node.png" text="Node.js" />
        <Skill image="/images/logos/tailwind.png" text="TailWindCSS" />
        <Skill image="/images/logos/graphql.png" text="GraphQL" />

        <Skill image="/images/logos/git.png" text="Git" directionLeft />
        <Skill image="/images/logos/sql.svg" text="SQL" directionLeft />
        <Skill image="/images/logos/mongodb.png" text="MongoDB" directionLeft />
        <Skill image="/images/logos/docker.png" text="Docker" directionLeft />

        <Skill image="/images/logos/python.png" text="Python" />
        <Skill image="/images/logos/javascript.png" text="JavaScript" />
        <Skill image="/images/logos/html.png" text="HTML" />
        <Skill image="/images/logos/css.png" text="CSS" />
      </div>
    </motion.div>
  );
}
