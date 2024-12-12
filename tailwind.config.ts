import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'ui-sans-serif', 'system-ui'],
        serif: ['Segoe UI', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Segoe UI', 'ui-monospace', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pattern-1': 'linear-gradient(115deg, #000000, #444444)',
        'gradient-pattern-2': 'linear-gradient(115deg, #000000, #444444)',
      },
      colors: {
        theme: {
          DEFAULT: '#fb991c',
          hover: '#d48119',
        },
        light: {
          DEFAULT: '#f4f4f4',
          hover: '#e0e0e0',
        },

        darkest: '#292432',
        lightest: '#ffffff',

        // text
        primary: '#161616',
        secondary: '#4b5563',

        // background
        dark: '#191f33',
        mid: '#2e3447',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '1400px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
