// TODO: fix the colors that does not work


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-red": "#C60026",
        "second-dark-red": "#8A001B",
        "main-black": "#181D27",
        "first-gray": "#414651",
        "second-gray": "#535862",
        "third-gray": "#D5D7DA",
        "silver": "#E9EAEB",
        "second-silver": "#868686",
      },
    },
  },
  plugins: [],
};
