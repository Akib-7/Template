/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        erode: ["Erode", "sans-serif"],
        dm: ["DM", "serif"],
      },
      colors: {
        bg1: "#35140B",
        bg2: "#1d1310",
        color1: "#FFD5C9",
        color2: "#BB734A",
      },
    },
  },
  plugins: [],
};
