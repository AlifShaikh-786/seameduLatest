/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'navres': '1075px',
        'xxl': '1400px',
        'ultra': '1700px',
        'huge': '2000px', 
      },
    },
  },
  plugins: [],
};
