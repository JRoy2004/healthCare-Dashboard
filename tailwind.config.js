/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "430px", // Extra small custom breakpoint
      },
      colors: {
        primary: {
          ultralight: "#f5f9ff",
          light: "#d8def7",
          lowmedium: "#a1a8d1",
          medium: "#1adeeb",
          dark: "rgba(47,50,156,255)",
        },
      },
      boxShadow: {
        card: "0 4px 15px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
