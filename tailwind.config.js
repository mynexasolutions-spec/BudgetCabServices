/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        prime: {
          orange: "#f26522",
          hover: "#e05413",
          light: "#ff7d3b",
          dark: "#0b0e14",
          navy: "#111622",
          card: "#131722",
          border: "#23293a",
          gold: "#f59e0b",
          accent: "#fbbf24",
        },
        brand: {
          yellow: "#FFC107",
          gold: "#D4AF37",
          charcoal: "#121212",
          surface: "#1A1E29",
          slate: "#242B3B",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      boxShadow: {
        "orange-glow": "0 0 25px rgba(242, 101, 34, 0.35)",
        "orange-glow-lg": "0 0 45px rgba(242, 101, 34, 0.5)",
        "gold-glow": "0 0 25px rgba(245, 158, 11, 0.35)",
        "card-hover": "0 10px 30px -10px rgba(242, 101, 34, 0.2)",
      },
    },
  },
  plugins: [],
};
