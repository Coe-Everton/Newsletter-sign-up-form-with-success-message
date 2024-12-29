/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:{
        DarkSlateGrey: "#242742",
        CharcoalGrey: "#36384e",
        Grey: "#9294a0",
        White: "#ffffff",
        Tomato: "#ff6257"
    }
  },
  plugins: [],
}