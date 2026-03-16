import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)' , 'monospace'],
        sans: ['var(--font-jetbrains-mono)' , 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;