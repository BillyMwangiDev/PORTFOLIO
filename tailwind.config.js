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
        void:       '#000000',
        coal:       '#101010',
        graphite:   '#212121',
        smoke:      '#2C2C2C',
        'cream-hi': '#E1E0CC',
        cream:      '#DEDBC8',
        stone:      '#9CA3AF',
        slate:      '#6B7280',
        ember:      '#D4824A',
        dusk:       '#E8A470',
        ash:        '#7A3A1A',
        char:       '#3D1C0A',
      },
      fontFamily: {
        almarai:    ['var(--font-almarai)', 'sans-serif'],
        'dm-sans':  ['var(--font-dm-sans)', 'sans-serif'],
        instrument: ['var(--font-instrument)', 'serif'],
      },
    },
  },
  plugins: [],
}
