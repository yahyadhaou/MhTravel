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
        navy: {
          50:  "#e8edf5",
          100: "#c5cfdf",
          200: "#9eafc8",
          300: "#778fb1",
          400: "#5a779f",
          500: "#3e608d",
          600: "#2a4d7a",
          700: "#1a3560",
          800: "#0d1f3c",
          900: "#060e1c",
        },
        gold: {
          50:  "#fdf8ee",
          100: "#f8ead0",
          200: "#f2d9a0",
          300: "#e8c36a",
          400: "#ddb040",
          500: "#c5a55a",
          600: "#a8863a",
          700: "#866929",
          800: "#644e1b",
          900: "#42330e",
        },
        cream: "#FAF7F0",
      },
      fontFamily: {
        serif:  ["'Playfair Display'", "Georgia", "serif"],
        sans:   ["'DM Sans'", "sans-serif"],
        mono:   ["'DM Mono'", "monospace"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse 80% 60% at 60% 40%, #1a3560 0%, #0d1f3c 60%, #060e1c 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
