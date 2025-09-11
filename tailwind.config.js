/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Light theme colors (Best for recruiters + HR)
        'section-gray': '#F8FAFC',
        'text-primary': '#1E293B',
        'accent-blue': '#2563EB',
        'muted-gray': '#64748B',
        // Dark theme colors (Best for peers, GitHub, dev community)
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
        'dark-text': '#F1F5F9',
        'accent-cyan': '#06B6D4',
        'accent-indigo': '#6366F1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
