import { Project, WorkExperience } from './types';

export const projects: Project[] = [
  {
    name: 'Discuzit',
    slug: 'discuzit',
    thumbnail: '/images/projects/discuzit-1.png',
    images: [
      '/images/projects/discuzit-1.png',
      '/images/projects/discuzit-2.png',
      '/images/projects/discuzit-3.png',
      '/images/projects/discuzit-4.png',
      '/images/projects/discuzit-5.png',
    ],
    githubUrl: 'https://github.com/declangao/discuzit',
    previewUrl: 'https://discuzit.vercel.app',
    description: 'A full-featured Reddit clone.',
    features: [
      'Built with React, Next.js, TypeScript and Tailwind',
      'tRPC integrated with Prisma and MongoDB',
      'Google sign in with NextAuth.js',
      'Create, john and leave communities',
      'Notion like post editor',
      'Upvote/downvote posts and comments',
      'Cascading comments',
      'Light & dark theme',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'tRPC',
      'NextAuth.js',
      'MongoDB',
      'Prisma',
    ],
    isFeatured: true,
  },
  {
    name: 'Household Task Manager',
    slug: 'task-manager',
    thumbnail: '/images/projects/task-manager.png',
    images: [
      '/images/projects/task-manager-1.png',
      '/images/projects/task-manager-2.png',
      '/images/projects/task-manager-3.png',
      '/images/projects/task-manager-4.png',
      '/images/projects/task-manager-5.png',
    ],
    githubUrl: 'https://github.com/declangao/household-task-manager',
    previewUrl: 'https://household-task-manager.vercel.app',
    description: 'A simple tool to "micromanage" your spouse. 😉',
    features: [
      'Built with React, Next.js, TypeScript, Tailwind CSS, Prisma, MongoDB and daisyUI',
      'Next.js 13 App router, server component and server action',
      'Fullstack app with backend API',
      'Prisma ORM with MongoDB',
      'Credentials authentication with NextAuth.js',
      'Multi-user support and assign task to user',
      'Markdown editor and preview',
      'Dark/light theme based on system setting',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'NextAuth.js',
      'MongoDB',
      'Prisma',
      'daisyUI',
    ],
    isFeatured: true,
  },
  {
    name: 'Portfolio Site',
    slug: 'portfolio',
    thumbnail: '/images/projects/portfolio.png',
    images: ['/images/projects/portfolio.png'],
    githubUrl: 'https://github.com/declangao/portfolio',
    description: 'My personal portfolio site.',
    features: [
      'Built with React, Next.js, Tailwind CSS and TypeScript',
      'Full stack site with backend API',
      'Send emails using Resend',
      'Multiple Framer Motion examples throughout the site',
      'Server side rendering',
      'Light/dark theme',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Next.js Markdown Blog',
    slug: 'blog',
    thumbnail: '/images/projects/blog-1.png',
    images: [
      '/images/projects/blog-1.png',
      '/images/projects/blog-2.png',
      '/images/projects/blog-3.png',
      '/images/projects/blog-4.png',
    ],
    githubUrl: 'https://github.com/declangao/nextjs-blog',
    previewUrl: 'https://nextjs-blog-declangao.vercel.app',
    description: 'A minimalistic markdown blog app.',
    features: [
      'Built with React, Next.js, Tailwind CSS and TypeScript',
      'Server side rendering (SEO friendly)',
      'Markdown file as blog entry',
      'Backend API to store messages in MongoDB',
      'Light/dark theme',
      'Minimalistic design',
      'Interactive and engaging animations',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
    isFeatured: true,
  },
  {
    name: 'Kings in the Corner Scoreboard',
    slug: 'scoreboard',
    thumbnail: '/images/projects/scoreboard.png',
    images: [
      '/images/projects/scoreboard-1.png',
      '/images/projects/scoreboard-2.png',
      '/images/projects/scoreboard-3.png',
      '/images/projects/scoreboard-4.png',
      '/images/projects/scoreboard-5.png',
      '/images/projects/scoreboard-6.png',
    ],
    previewUrl:
      'https://play.google.com/store/apps/details?id=gao.declan.kings_corner_score_board',
    description:
      'Built for my family, this is a score keeping mobile app developed with Flutter and Dart.',
    features: [
      'Fully in compliance with Material 3 design',
      'Dynamic theme colour',
      'Hive database',
      'Light/dark theme',
    ],
    techStack: ['Flutter', 'Dart', 'Hive'],
  },
  {
    name: 'Agriculture Sales Management System',
    slug: 'nxl',
    thumbnail: '/images/projects/nxl.png',
    images: [
      '/images/projects/nxl-1.png',
      '/images/projects/nxl-2.png',
      '/images/projects/nxl-3.png',
      '/images/projects/nxl-4.png',
      '/images/projects/nxl-5.png',
    ],
    previewUrl: 'https://app.nongxiao123.com',
    description:
      'A professional sales management SaaS solution for the agriculture supply industry.',
    features: [
      'Led the frontend team to design and develop the product from scratch',
      'Constructed two major overhauls for the SaaS product and established a bi-weekly release iteration',
      'Programmed an entire JavaScript SDK for receipt and sticky label printing using portable Bluetooth thermal printer. A lot of research went into how Bluetooth protocol works, ESC and TSPL printer commands and how to divide data into 20 bits packages to send to printer via Bluetooth API',
      'The platform saw major growth over the years with over 100k paid users',
    ],
    techStack: [
      'Vue',
      'Element',
      'React',
      'Ant Design',
      'AngularJS',
      'Bootstrap',
    ],
  },
  {
    name: 'English Level Evaluation Test for Children',
    slug: 'english-test',
    thumbnail: '/images/projects/english-test.png',
    images: [
      '/images/projects/english-test-1.png',
      '/images/projects/english-test-2.png',
      '/images/projects/english-test-3.png',
    ],
    previewUrl: 'https://ptest.hujiang.com',
    description:
      'An English level evaluation test for young kids designed to attract new users for an online eudcation platform.',
    features: [
      'The project was designed to attract new users. It collects user information at the end of the test and passes it on to the sales team in order to make contact',
      'Built using AngularJS and Bootstrap',
      'It needs to be compatible with mobile devices by using responsive design',
    ],
    techStack: ['AngularJS', 'Bootstrap'],
  },
];

export const experience: WorkExperience[] = [
  {
    startDate: 'AUG 2023',
    endDate: 'Present',
    title: 'Full Stack Developer',
    company: 'Freelancing',
    description: '',
    duties: [
      'Developed websites for numerous clients using React and Next.js',
      'Worked with a previous company on their new projects',
    ],
    tags: [
      'React',
      'Next.js',
      'Vue',
      'Node.js',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
    ],
  },
  {
    startDate: 'MAR 2022',
    endDate: 'SEP 2022',
    title: 'Frontend Tech Lead (GCB4)',
    company: 'AIA Information Technology (Beijing)',
    description: '',
    duties: [
      'Fortune 500 Fintech company',
      'Led a team of four to develop an internal web UI framework (Vue 3 and React) consisting of 120+ components',
      'Wrote unit test (Jest) and Storybook for all components and E2E test (Cypress) for organism level components',
      'Conducted code review for the entire team and collaborated with two external teams in different countries',
      'Integrated a new component design review process which increased efficiency and accelerated dev timeline',
      'Experimented on GraphQL, MongoDB, NestJS and Kafka for in-house applications',
      'Advised three cross function teams on their technical decisions and development plans',
      'Completed my trial period one month earlier due to my performance and contribution to the team',
    ],
    tags: ['Vue', 'React', 'Node.js', 'GraphQL', 'MongoDB', 'NestJS', 'Kafka'],
  },
  {
    startDate: 'JAN 2017',
    endDate: 'MAR 2022',
    title: 'Senior Frontend Developer',
    company: 'Donglong Technology (Beijing)',
    duties: [
      'Designed and developed the Agriculture Supply Sales Management Solution SaaS Platform for web and mobile from scratch, composed two major overhauls which significantly improved user experience and added professional financial and accounting modules',
      'Utilized Vue.js (v2&v3), React, Flutter and WeChat Mini Program to build multiple web and mobile applications',
      'Built an entire Bluetooth printer SDK in JavaScript with ESC and TSPL commands support within two weeks',
      'Further developed a dozen more agriculture related projects',
    ],
    tags: ['Vue', 'React', 'Angular.js', 'Node.js', 'MySQL'],
  },
  {
    startDate: 'JAN 2016',
    endDate: 'JAN 2017',
    title: 'Frontend Developer (P6)',
    company: 'Hujiang Education (Shanghai)',
    duties: [
      'Independently built English Level Evaluation Systems for Children and Adults which are still in use to date',
      'Collaborated with core data team to design and build the internal question bank system',
      'Built a web scraper using Python to automatically collect and store questions which greatly simplified the workload of the question bank team',
      'Engineered a web scraper using Python to automatically collect and store questions which greatly reduced the workload of the question bank team',
      'Created a conceptual mobile app that recognizes and solves mathematic problems using OCR by taking photos',
    ],
    tags: ['Vue', 'Angular.js', 'Python'],
  },
  {
    startDate: 'MAR 2015',
    endDate: 'SEP 2015',
    title: 'Android Developer',
    company: 'Vodafone New Zealand',
    duties: [
      'Maintained "My Vodafone" app',
      'Assisted converting the original PhoneGap based hybrid app to a native Android app which significantly improved app performance and Play Store ratings',
      'Helped the frontend dev team build the internal customer service management platform',
    ],
    tags: ['Java', 'PhoneGap'],
  },
];
