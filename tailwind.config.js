/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'walkingMan': "url('../images/walkingMan.png')",
      },
      keyframes: {
        walk: {
          '0%': { backgroundPosition: "0px" },
          '50%': {backgroundPosition: "200px"},       
        }
      },
      animation: {
        walk: 'walk 2.5s steps(8) infinite',
      }
    },
  },
  plugins: [],
}