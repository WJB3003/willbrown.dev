/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
    screens: {
      sm: {
        min: "150px",
        max: "767px",
      },
      md: {
        min: "768px",
        max: "1023px",
      },
      lg: {
        min: "1024px",
        max: "1279px",
      },
      xl: {
        min: "1280px",
        max: "1535px",
      },
      "2xl": {
        min: "1536px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
