// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Jakarta ke default sans font banano holo
        sans: ["var(--font-jakarta)", "sans-serif"],
        // Bomstad font er jonno alada class: font-bomstad
        bomstad: ["var(--font-bomstad)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Jakarta ke default sans font banano holo
        sans: ["var(--font-jakarta)", "sans-serif"],
        // Bomstad font er jonno alada class: font-bomstad
        bomstad: ["var(--font-bomstad)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
