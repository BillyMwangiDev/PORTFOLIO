export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  role: string
  href?: string
}

export interface SkillCategory {
  label: string
  items: string[]
}

export interface Stat {
  value: string
  label: string
}

export const projects: Project[] = [
  {
    id: 'hekima-labs',
    title: 'Hekima Labs',
    description: 'AI & Automation Studio built for African businesses. Full-stack platform connecting SMEs with intelligent workflow automation.',
    tags: ['FastAPI', 'React', 'Python', 'AI'],
    role: 'Founder & Lead Engineer',
  },
  {
    id: 'duka-pos',
    title: 'DukaPOS',
    description: 'Enterprise offline-first point-of-sale system. Handles inventory, sales, and reporting with zero connectivity dependency.',
    tags: ['Electron', 'FastAPI', 'SQLite'],
    role: 'Lead Engineer',
  },
  {
    id: 'antigravity',
    title: 'Antigravity',
    description: 'IoT-based cattle tracking and health monitoring system. Real-time location, movement anomaly detection, and mobile alerts.',
    tags: ['IoT', 'Python', 'React Native', 'FastAPI'],
    role: 'Backend & IoT Engineer',
  },
  {
    id: 'keja',
    title: 'Keja',
    description: 'Verified property listing platform fighting real-estate fraud. KYC-gated landlord profiles and tenancy protection tools.',
    tags: ['Django', 'React', 'PostgreSQL'],
    role: 'Full-Stack Engineer',
  },
  {
    id: 'ascribe',
    title: 'Ascribe',
    description: 'Estate management application with separate resident and admin portals, maintenance ticketing, and levy management.',
    tags: ['FastAPI', 'React', 'PostgreSQL'],
    role: 'Backend Engineer',
  },
  {
    id: 'nexus-movie-api',
    title: 'Nexus Movie API',
    description: 'ALX capstone project. Weighted collaborative-content hybrid recommendation algorithm serving personalised movie suggestions.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    role: 'Solo Engineer',
    href: 'https://github.com/billymwangidev',
  },
]

export const skills: SkillCategory[] = [
  { label: 'Languages',       items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { label: 'Backend',         items: ['FastAPI', 'Django', 'REST APIs', 'PostgreSQL', 'SQLite', 'Redis'] },
  { label: 'Frontend',        items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Mobile',          items: ['React Native', 'Expo'] },
  { label: 'Infrastructure',  items: ['Docker', 'Vercel', 'GitHub Actions', 'Linux'] },
  { label: 'AI & Automation', items: ['LLM Integration', 'Prompt Engineering', 'Workflow Automation', 'Data Pipelines'] },
]

export const stats: Stat[] = [
  { value: '3+',  label: 'Years Python' },
  { value: '6',   label: 'Projects Shipped' },
  { value: '1',   label: 'Studio Founded' },
  { value: 'NBO', label: 'Based in Nairobi' },
]

export const socialLinks = {
  github:   'https://github.com/billymwangidev',
  linkedin: 'https://linkedin.com/in/billymwangi',
  tiktok:   'https://www.tiktok.com/@billymwangidev',
  x:        'https://x.com/billymwangidev',
  email:    'billymwangi200@gmail.com',
}
