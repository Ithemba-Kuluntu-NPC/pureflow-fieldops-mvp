import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        water: {
          50: "#EAF7F6",
          100: "#D9F3EE",
          500: "#1FA7A0",
          700: "#0F766E",
          900: "#0A3550",
          950: "#06283D"
        },
        mint: {
          50: "#F0FCF9",
          100: "#D9F3EE",
          500: "#22c55e",
          700: "#15803d"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(10, 53, 80, 0.10)"
      }
    }
  },
  plugins: []
};
export default config;
