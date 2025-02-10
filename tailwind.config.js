/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#a855f7',
          dark: '#9333ea',
        },
        dark: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 30px rgba(99, 102, 241, 0.5)',
      },
    },
  },
  plugins: [],
}
