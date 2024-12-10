/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#FFFFFF",
          surface: "#F5F5F5",
          textPrimary: "#212121",
          textSecondary: "#757575",
          textAccent: "#6200EE",
          border: "#E0E0E0",
          btnPrimary: "#6200EE",
          btnHover: "#3700B3",
          error: "#B00020",
        },
        dark: {
          bg: "#121212",
          surface: "#1E1E1E",
          textPrimary: "#E0E0E0",
          textSecondary: "#B0B0B0",
          textAccent: "#BB86FC",
          border: "#282828",
          btnPrimary: "#03DAC6",
          btnHover: "#018786",
          error: "#CF6679",
        },
      },
    },
  },
  plugins: [],
};
