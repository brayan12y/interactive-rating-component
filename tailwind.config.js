/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
      "blue-end-gradient": "#171d24",
      "shadow-blue": "#30343b",
      gray: "#7c8798",
    },
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  plugins: [],
};
