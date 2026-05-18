import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        water: {
          50: "#eef9ff",
          100: "#d8f1ff",
          500: "#0ea5e9",
          700: "#0369a1",
          900: "#082f49"
        },
        mint: {
          100: "#dcfce7",
          500: "#22c55e",
          700: "#15803d"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(8, 47, 73, 0.10)"
      }
    }
  },
  plugins: []
};
export default config;
