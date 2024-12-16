/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/assets/image/png/hero-bg-img.png')",
        "hero-bg-2": "url('../public/assets/image/png/hero-text-bg.png')",
      },
      colors: {
        "blue": "#191A42",
        "lightlavender": "#ece8f8",
        "deepBlue": "#023da0",
        "orange": "#F88011",
        "gray": "#E3E4E6",
      },
      boxShadow: {
        'customOne': '0px 0px 13.9px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        "serrat": ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
