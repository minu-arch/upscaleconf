import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        s: '360px',
        xs: '420px',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontSize: {
        'responsive-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'responsive-md': 'clamp(1.5rem, 4vw, 4rem)',
        'responsive-lg': 'clamp(2rem, 6vw, 4rem)',
      },
      lineHeight: {
        'responsive-sm': 'clamp(1.2, 2vw, 1.5)',
        'responsive-md': 'clamp(1.4, 2.5vw, 1.8)',
        'responsive-lg': 'clamp(1.6, 3vw, 2)',
      },
      colors: {
        beige: '#efdfcc',
        hero: '#0f0f0f',
        herotext: '#ff4200',
        ticket: '#d9c8b4',
        semidark: '#212529',
        bgfooter: '#1a1a1a',
        textfooter: '#847c73',
      },
    },
  },
  plugins: [containerQueries],
};

export default config;
