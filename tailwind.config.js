/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "450px",
      md: "765px",
      lg: "1400px",
    },
    extend: {
      fontFamily: {
        Raleway: "'Raleway', sans-serif",
        opensans: "'Open Sans', sans-serif",
        sono: "'Sono', sans-serif",
      },
      colors: {
        darkBlueI: "hsl(217, 28%, 15%)",
        darkBlueM: "hsl(218, 28%, 13%)",
        darkBlueF: "hsl(216, 53%, 9%)",
        darkBlueT: "hsl(219, 30%, 18%)",
        cyanAcc1: "hsl(176, 68%, 64%)",
        cyanAcc2: "hsl(198, 60%, 50%)",
        lightRedErr: "hsl(0, 100%, 63%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
