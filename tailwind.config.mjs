/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Move darkMode to the correct position and set to "class"
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a", // Added missing '#' before the color code
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      screens: {
        "max-320px": { max: "320px" }, // Corrected the value for the max breakpoint
      },
      spacing: {
        76: "19rem", // Added 19rem as a spacing utility
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))", // Corrected spacing in the value
      },
    },
  },
  plugins: [], // Plugins remain unchanged
};
