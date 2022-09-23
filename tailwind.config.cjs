/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
      },
      backgroundImage: {
        "gradient-border":
          "linear-gradient(180deg, #dbac2c 30%, #8047F8 67.08%)",
      },
    },
  },
  plugins: [],
};
