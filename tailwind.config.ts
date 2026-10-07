import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          900: "#3E0A12",
          800: "#5A0F1B",
          700: "#7A1424",
        },
        gold: {
          300: "#E6CB8A",
          400: "#D4AF37",
          500: "#C9A24B",
          600: "#A8842F",
        },
        ivory: "#FBF6EC",
        cream: "#F3E9D6",
        emerald: {
          900: "#0B3B2E",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        accent: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
