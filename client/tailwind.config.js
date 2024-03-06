/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx}"],

  theme: {
    colors: {
      twitterblue: "rgb(29,155,240)",
      navyblue: "#1f2937",
      white: "#ffffff",
      ash: "#adaf9b",
      black: "#000000"
    },
    extend: {
      animation: {
        'custom-spin': 'customSpin 2s linear infinite',
      },
      // keyframes: {
      //   customSpin: {
      //     from: {
      //       transform: 'rotate(0deg)',
      //     },
      //     to: {
      //       transform: 'rotate(360deg)',
      //     },
      //   },
      // },
    }
    // ,
    // variants: {},
    // plugins: [],
  },
  plugins: [],
}

