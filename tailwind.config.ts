// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF88", // Neon blue
        background: "#111111", // Dark background
        secondary: "#00FF88", // Adjust as needed for holographic look
        card: "rgba(255, 255, 255, 0.1)", // Semi-transparent for glass effect
      },
      backdropBlur: {
        glass: "20px",
      },
      fontFamily: {
        sans: ['"Roboto Mono"', "monospace"], // Monospaced font for a techy look
      },
    },
  },
  plugins: [],
};