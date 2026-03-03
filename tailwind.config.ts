import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        p: "240px",
        d: "1024px",
        lg: "1650px",
      },
      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
        YesevaOne: ["Yeseva One", "sans-serif"],
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
      },

      colors: {
        main: "#0b5cc8",
        mainOrange: "#ffba00",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
