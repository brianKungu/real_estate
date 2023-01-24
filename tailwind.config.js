/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#FEF9C3",
        secondaryBg: "#43792A",
        neutralBg: "#61AF44",
        primaryTextColor: "#FAFAFA",
        secondaryTextColor: "#1F2937",
        neutralTextColor: "#4B5563",
      },
    },
  },
  plugins: [],
};
