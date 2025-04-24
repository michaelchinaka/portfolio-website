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
  upswing,
  premPredictor,
  pytorchTutorial,
  androidApp,
  simulation,
  cognitant
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
    title: 'Technologies',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience',
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
    name: 'Premier League Results Predictor',
    description: 'A machine learning model that predicts Premier League match outcomes using historical data and advanced statistical analysis.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'AWS'],
    image: premPredictor,
    repo: 'https://github.com/michaelchinaka/football_matches',
    demo: 'https://your-demo-link.com/predictor',
  },
  {
    id: 'project-2',
    name: 'PyTorch Tutorial',
    description: 'Twisting the premier league results predictor to a PyTorch tutorial. A comprehensive tutorial series covering PyTorch fundamentals, neural networks, and deep learning concepts with practical examples.',
    tags: ['Python', 'Jupyter', 'PyTorch', 'NumPy'],
    image: pytorchTutorial,
    repo: 'https://github.com/michaelchinaka/pytorch-tutorial.io?tab=readme-ov-file',
    demo: 'https://michaelchinaka.github.io/pytorch-tutorial.io/',
  },
  {
    id: 'project-3',
    name: 'Android Fridge Management App',
    description: 'A mobile application for managing household groceries, tracking expiration dates, suggesting recipes, and generating shopping lists automatically.',
    tags: ['Java', 'Android Studio'],
    image: androidApp,
    repo: 'https://github.com/michaelchinaka/android-app',
    demo: 'https://play.google.com/store/apps/details?id=com.yourapp.fridgemanager',
  },
  {
    id: 'project-5',
    name: 'AI Document Assistant',
    description: 'An intelligent tool that uses NLP and retrieval-augmented generation (RAG) to let you ask a chat assistant questions about your documents and receive accurate, citation-backed responses.',
    tags: ['React', 'JavaScript', 'Flask', 'AWS', 'NLP'],
    image: cognitant,
    demo: 'https://your-demo-link.com/doc-assistant',
  },
  {
    id: 'project-4',
    name: 'Simulation Framework (IBM)',
    description: 'A simulation framework that automates the simulation and analysis of event data. Designed to improve reproducibility and scalability, it streamlines the automation of ETL pipelines and structured result capture.',
    tags: ['Java', 'Docker', 'Bash'],
    image: simulation
  },
];

export { services, technologies, experiences, projects };
