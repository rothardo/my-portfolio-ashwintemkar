import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      spacing: {
        "1/10": "10%",
      },
      colors: {
        "light-gray": "#FFFFFF",
        "dark-gray": "#2c2c2c",
        "text-light": "#2c2c2c",
        "text-dark": "#FFFFFF",
        "highlight-white": "#000000",
        "accent-dark": "#2c2c2c",
        "accent-light": "#FFFFFF",
      },
      backgroundColor: {
        "bg-light": "#FFFFFF",
        "bg-dark": "#2c2c2c",
        "gradient-start-light": "#FFFFFF",
        "gradient-end-light": "#FFFFFF",
        "gradient-start-dark": "#2c2c2c",
        "gradient-end-dark": "#2c2c2c",
      },
      textColor: {
        "text-light": "#2c2c2c",
        "text-dark": "#FFFFFF",
        "highlight-white": "#000000",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
