import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#2A0808',
          mid: '#881010',
        },
        gold: '#C9A96E',
        'red-dark': '#881010',
        charcoal: '#2A2A2A',
        'cool-gray': '#6B7280',
        'light-gray': '#9CA3AF',
        'border-gray': '#D1D5DB',
        'border-light': '#E5E7EB',
        'bg-primary': '#F7F8FA',
        'bg-card': '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
        text: '720px',
      },
      letterSpacing: {
        hero: '-0.5px',
        heading: '-0.3px',
        mono: '0.5px',
        caps: '2px',
      },
      lineHeight: {
        hero: '1.0',
        heading: '1.3',
        body: '1.7',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.3s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
