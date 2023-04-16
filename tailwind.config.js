/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
    }),
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        primary: "#4E9BCE",
      },
    },
  },
  fontFamily: {
    sans: ["Open Sans", "sans-serif"],
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: "bold",
          lineHeight: "1.2",
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: "bold",
          lineHeight: "1.2",
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontWeight: "bold",
          lineHeight: "1.2",
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontWeight: "bold",
          lineHeight: "1.2",
        },
      });
    }),
  ],
};
