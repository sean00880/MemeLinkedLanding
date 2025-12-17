import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
    './page.tsx',
    './layout.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF88',
        background: '#111111',
        secondary: '#00FF88',
        card: 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        glass: '20px',
      },
      fontFamily: {
        sans: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
