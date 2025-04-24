import {
  frontend,
  backend,
  ux,
  prototyping,
  fullStack,
  dataScience,
  aiIcon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  java,
  python,
  aws,
  terraform,
  sql,
  nosql,
  spark,
  pytorch,
  sklearn,
  matplotlib,
  seaborn,
  lead2,
  ibm,
  wimbledon,
  upswing
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-Stack Developer',
    icon: fullStack,
  },
  {
    title: 'Data & Insights',
    icon: dataScience,
  },
  {
    title: 'Machine Learning Enthusiast',
    icon: aiIcon,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
    category: 'programming'
  },
  {
    name: 'Python',
    icon: python,
    category: 'programming'
  },
  {
    name: 'JavaScript',
    icon: javascript,
    category: 'programming'
  },
  {
    name: 'HTML',
    icon: html,
    category: 'programming'
  },
  {
    name: 'CSS',
    icon: css,
    category: 'programming'
  },
  {
    name: 'React',
    icon: reactjs,
    category: 'programming'
  },
  {
    name: 'Node.js',
    icon: nodejs,
    category: 'programming'
  },
  {
    name: 'TypeScript',
    icon: typescript,
    category: 'programming'
  },
  {
    name: 'Tailwind',
    icon: tailwind,
    category: 'programming'
  },
  {
    name: 'Docker',
    icon: docker,
    category: 'devops'
  },
  {
    name: 'Git',
    icon: git,
    category: 'devops'
  },
  {
    name: 'AWS',
    icon: aws,
    category: 'devops'
  },
  {
    name: 'Terraform',
    icon: terraform,
    category: 'devops'
  },
  {
    name: 'SQL',
    icon: sql,
    category: 'data'
  },
  {
    name: 'NoSQL',
    icon: nosql,
    category: 'data'
  },
  {
    name: 'Apache Spark',
    icon: spark,
    category: 'data'
  },
  {
    name: 'PyTorch',
    icon: pytorch,
    category: 'data'
  },
  {
    name: 'Scikit-Learn',
    icon: sklearn,
    category: 'data'
  },
  {
    name: 'Matplotlib',
    icon: matplotlib,
    category: 'data'
  },
  {
    name: 'Seaborn',
    icon: seaborn,
    category: 'data'
  }
];

const experiences = [
  {
    title: 'Full Stack Developer (Contractor)',
    company_name: 'UpswingAI',
    icon: upswing,
    iconBg: '#FFFFFF',
    date: 'Aug 2024 - Present',
    technologies: ['React', 'JavaScript', 'Python', 'AWS', 'Terraform']
  },
  {
    title: 'Data Analyst',
    company_name: 'Wimbledon Championships',
    icon: wimbledon,
    iconBg: '#FFFFFF',
    date: 'Jul 2023',
    technologies: ['SQL', 'Python']
  },
  {
    title: 'Software Developer Intern',
    company_name: 'IBM',
    icon: ibm,
    iconBg: '#FFFFFF',
    date: 'Jul 2022 - Jul 2023',
    technologies: ['Java', 'Docker', 'Bash']
  },
  {
    title: 'Business Analyst Intern',
    company_name: 'Lead2 Consulting',
    icon: lead2,
    iconBg: '#FFFFFF',
    date: 'Aug 2021 - Sep 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
