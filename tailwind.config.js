/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sitebg: "white"
      },
      backgroundImage: {
        'walkingMan': "url('../images/walkingMan.png')",
        'bullbear': "url('../public/BullBear1.png')",
        'mutualFunds': "url('../public/MutualFunds.jpeg')"
      },
      keyframes: {
        walk: {
          '0%': { backgroundPosition: "0px" },
          '100%': {backgroundPosition: "200px"},       
        }
      },
      animation: {
        walk: 'walk 2.5s steps(8) infinite',
      }
    },
  },
  plugins: [],
}