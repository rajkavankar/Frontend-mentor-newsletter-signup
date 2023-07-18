/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        dartGrey: "hsl(234, 29%, 20%)",
        regularGrey: "Grey: hsl(231, 7%, 60%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
