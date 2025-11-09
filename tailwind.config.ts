import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        black: 'var(--black)',
        white: 'var(--white)',
        'blue-accent': 'var(--blue-accent)',
        'gray-neutral': 'var(--gray-neutral)',
      },
      fontFamily: {
        'ppneuebit': ['PP NeueBit', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-2': '-0.02em',
      },
    },
  },
  plugins: [],
};
export default config;

