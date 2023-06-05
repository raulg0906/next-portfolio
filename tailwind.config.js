/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'Night': "#0d0e0d",
      'SatinGold': "#B69316",
      'Ivory': "#F5FBEF",
      'Gray': '#808080'

    },
    extend: {
    },
  },
  plugins: [],
}
