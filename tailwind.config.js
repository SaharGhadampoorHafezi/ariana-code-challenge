/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#8A001B',
        'main-black': '#181D27',
        'second-gray': '#535862',
      }
    },
  },
  plugins: [],
}

