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
        "light-gray": "#D6DBDC",
        "dark-gray": "#1F2937",
        "text-light": "#111827",
        "text-dark": "#FFFFFF",
        "highlight-green": "#4CAF50",
        "accent-dark": "#374151",
        "accent-light": "#9CA3AF",
      },
      backgroundColor: {
        "bg-light": "#FFFFFF",
        "bg-dark": "#1F2937",
        "gradient-start-light": "#D6DBDC",
        "gradient-end-light": "#FFFFFF",
        "gradient-start-dark": "#1F2937",
        "gradient-end-dark": "#111827",
      },
      textColor: {
        "text-light": "#111827",
        "text-dark": "#FFFFFF",
        "highlight-green": "#2D6A4F",
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
