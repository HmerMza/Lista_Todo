/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-gradient': 'linear-gradient(90deg, #6366F1, #A855F7, #EC4899)',
        'Very-Dark-Blue': 'hsl(235, 21%, 11%)',
        'Very-Dark-Desatured': 'hsl(235, 24%, 19%)',
      },
      boxShadow: {
        'bottom-sides': '2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

