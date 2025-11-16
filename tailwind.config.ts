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
        'helvetica': ['PP Neue Montreal', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-2': '-0.02em',
      },
      boxShadow: {
        'header-scrolled': '0 2px 12px rgba(109, 191, 255, 0.06)',
      },
      borderRadius: {
        'ellipse-top': '50% 50% 0 0 / 100% 100% 0 0',
      },
    },
  },
  plugins: [],
};
export default config;

