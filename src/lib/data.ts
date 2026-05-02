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
    id: 'duka-pos',
    title: 'DukaPOS',
    description: 'Offline-first Windows desktop POS for Kenyan retail: Electron + React + FastAPI bundled as a self-contained installer. M-Pesa STK Push, barcode scanning, loyalty points, KRA eTIMS export, and ESC/POS thermal printing. 21 backend + 39 frontend tests on CI.',
    tags: ['Electron', 'FastAPI', 'React', 'SQLite'],
    role: 'Lead Engineer',
    href: 'https://github.com/BillyMwangiDev/DukaPOS',
  },
  {
    id: 'keja',
    title: 'Keja',
    description: 'Trust-first property rental app for Nairobi. Zero agent fees, verified landlord badges via National ID + deed check, integrated M-Pesa STK Push deposits, and PostGIS proximity search. FastAPI backend with an Expo React Native mobile app.',
    tags: ['FastAPI', 'React Native', 'PostgreSQL', 'PostGIS'],
    role: 'Full-Stack Engineer',
    href: 'https://github.com/BillyMwangiDev/Keja',
  },
  {
    id: 'stock-soko',
    title: 'Stock Soko',
    description: 'Mobile trading platform for the Nairobi Securities Exchange (NSE). Real-time quotes via multi-provider fallback, AI buy/sell/hold signals, M-Pesa deposits and withdrawals, WebSocket price streaming, and a 24-module investing education centre.',
    tags: ['FastAPI', 'React Native', 'Python', 'M-Pesa'],
    role: 'Full-Stack Engineer',
    href: 'https://github.com/BillyMwangiDev/Stock-Soko',
  },
  {
    id: 'mifugo-management',
    title: 'Mifugo',
    description: 'IoT cattle platform for Kenyan pastoralists. ESP32-S3 smart collars publish GPS + temperature + accelerometer data over MQTT. PostGIS geofencing, theft detection via strap sensor, estrus and sickness alerts, and USSD field access via Africa\'s Talking.',
    tags: ['FastAPI', 'Next.js', 'MQTT', 'PostGIS'],
    role: 'Full-Stack & IoT Engineer',
    href: 'https://github.com/BillyMwangiDev/MIFUGO-MANAGEMENT',
  },
  {
    id: 'nexus-movie',
    title: 'Nexus Movie',
    description: 'Full-stack movie platform with a weighted collaborative-content hybrid recommendation engine. Built as an ALX capstone: FastAPI backend, React Native frontend, and a PostgreSQL graph powering personalised suggestions.',
    tags: ['Python', 'FastAPI', 'React Native', 'PostgreSQL'],
    role: 'Solo Engineer',
    href: 'https://github.com/BillyMwangiDev/nexus-movie-frontend',
  },
  {
    id: 'africas-talking',
    title: 'PriceChekRider',
    description: 'USSD + SMS retail price comparison built for the Africa\'s Talking Hackathon. Shoppers dial in, set their Nairobi location, then receive an SMS comparing prices across Naivas, Quickmart, Tuskys, and Carrefour, and can place an order by replying ORDER.',
    tags: ['Python', 'FastAPI', 'USSD', 'SMS API'],
    role: 'Solo Engineer, Hackathon',
    href: 'https://github.com/BillyMwangiDev/Africas-talking_hackathon',
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
  { value: '20+', label: 'Projects Shipped' },
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
