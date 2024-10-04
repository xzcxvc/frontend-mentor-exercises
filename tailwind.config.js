/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: {
          950: "#F4D04E",
        },
        gray: {
          500: "#6B6B6B",
          950: "#111111",
        },
      },
      boxShadow: {
        solid: "8px 8px 0px 0px black",
      },
    },
  },
};
