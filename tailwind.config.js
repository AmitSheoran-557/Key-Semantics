/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/assets/image/png/hero-bg-img.png')",
      },
      colors: {
        "blue": "#191A42",
        "lightlavender": "#ece8f8",
        "fadeBlue": "#24254B",
        "Periwinkle": "#7C7EB9",
        "aquaBlue": "#48C3D7",
        "deepBlue": "#111235",
        "gray": "#C9CAD4",
        "lightGray": "#F7F9FB",
        "lightBlue": "#ECF2F8",
      },
      boxShadow: {
        'customOne': '0px 10px 40px 0px rgba(65, 86, 107, 0.05)',
      },
      fontFamily: {
        "serrat": ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
