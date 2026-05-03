/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nav': '1070px',
        'xxl': '1400px',
        'ultra': '1700px',
        'huge': '2000px', 
      },
    },
  },
  plugins: [],
};
