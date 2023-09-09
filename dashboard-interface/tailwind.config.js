/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,cjs,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "clean": "#E6F4F1",
        "efes": "#A2D8FF",
        "dark-efes": "#0267B5"
      },
      fontFamily: {
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
