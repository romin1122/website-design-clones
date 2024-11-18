import type { Config } from 'tailwindcss';

export default {
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
        steadiaAccent: '#4b2aad',
        steadiaBackground: '#fdfbf9',
        steadiaButton: '#9484c6',
        steadiaText: '#5C5856',
        steadiaTextFocus: '#f5efeb',
        steadiaBlack: '#201445',
        steadiaFooter: '#F6F0EB',
      },
    },
  },
  plugins: [],
} satisfies Config;
