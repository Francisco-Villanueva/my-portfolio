/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#451465",
        "light-purple": "#7c786f",
        blue: "#2a3763",
        "dark-blue": "#06182f",
        grey: "#cecece",
        'dark-grey': "#818181",
        black: "#333333",
      },
    },
  },
  plugins: [],
};
