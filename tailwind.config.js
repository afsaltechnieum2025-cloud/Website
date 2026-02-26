/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#F7C948",
        brandOrange: "#F28A30",
        brandRed: "#E64539",
        brandPurple: "#8E3BFF",
        brandblack:"#000000",
        brandwhite: "#ffffff"
      },
      backgroundImage: {
        brandGradient:
          "linear-gradient(90deg, #F7C948, #F28A30, #E64539)",
      },
    },
  },
  plugins: [],
};