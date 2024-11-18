/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan Tailwind membaca file JSX dan TSX
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7ED',
        },
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin untuk form styling
  ],
};
