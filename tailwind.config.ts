import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#285E73",
          dark: "#1A3D4A",
          light: "#3A7A94",
          lighter: "#5A9AB3",
        },
        accent: {
          yellow: "#FFB84D",
          "light-yellow": "#FFD699",
          cyan: "#4DB3E6",
          blue: "#285E73",
          teal: "#2D7A8F",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Kufi Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

