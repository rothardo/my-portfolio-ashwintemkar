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
      colors: {
        "theme-blue": "#1E3A8A",
        "theme-red": "#B91C1C",
        "theme-black": "#111827",
        "light-gray": "#D6DBDC",
        "dark-gray": "#1F2937",
        "text-light": "#111827",
        "text-dark": "#FFFFFF",
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
      },
    },
  },
  plugins: [],
};

export default config;
