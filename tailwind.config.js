/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ef',
          100: '#f9eecd',
          200: '#f2db99',
          300: '#e9c05c',
          400: '#dfa534',
          500: '#c8871e',
          600: '#a56817',
          700: '#824c16',
          800: '#6a3d18',
          900: '#573319',
        },
        ink: {
          50: '#f5f5f6',
          100: '#e7e6e8',
          200: '#c3c2c5',
          300: '#9a989c',
          400: '#6c6a6e',
          500: '#49484b',
          600: '#2f2e31',
          700: '#201f22',
          800: '#141316',
          900: '#0a090b',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0,0,0,0.25)',
        gold: '0 10px 40px -10px rgba(200,135,30,0.45)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
