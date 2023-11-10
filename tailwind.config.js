/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      mobile: "414px",
      tablet: "800px",
      web: "1280px",
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
