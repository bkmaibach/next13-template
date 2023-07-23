const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1080px",
    },
    fontFamily: {
      sans: ["Futura-pt", "sans-serif"],
      serif: ["Cormorant SC", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        blue: "#1fb6ff",
        black: "#000000",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        brandprimary: {
          100: "#c7efec",
          200: "#a2dfda",
          300: "#7dcfca",
          400: "#58bfba",
          500: "#33afaa",
          600: "#2e9d97",
          700: "#287f7a",
          800: "#22625d",
          900: "#0f4240"
        },
        brandsecondary: {
          // https://www.w3schools.com/colors/colors_picker.asp
          100: "#00e600",
          200: "#00cc00",
          300: "#00b300",
          400: "#009900",
          500: "#008000",
          600: "#006600",
          700: "#004d00",
          800: "#003300",
          900: "#001a00",
        },
        brandtertiary: {
          // https://www.w3schools.com/colors/colors_picker.asp
          100: "#f8dab7",
          200: "#f5c48d",
          300: "#f2ae65",
          400: "#ee9345",
          500: "#e87626",
          600: "#c7611e",
          700: "#a24b16",
          800: "#7c3610",
          900: "#561f0a"
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, addBase, config }) {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.3xl"),
          fontFamily: config("theme.fontFamily.serif"),
          marginBottom: "1rem",
        },
        h2: {
          fontSize: config("theme.fontSize.2xl"),
          fontFamily: config("theme.fontFamily.serif"),
          marginBottom: "1rem",
        },
        h3: {
          fontSize: config("theme.fontSize.xl"),
          fontFamily: config("theme.fontFamily.serif"),
          marginBottom: "1rem",
        },
        p: {
          fontSize: config("theme.fontSize.lg"),
          fontFamily: config("theme.fontFamily.sans-serif"),
          marginBottom: "1rem",
        },
        ul: {
          marginLeft: "4rem",
          listStyleType: "circle"
        },
        li: {
          fontSize: config("theme.fontSize.lg"),
          fontFamily: config("theme.fontFamily.sans-serif"),
          marginBottom: "1rem",
        },
        button: {
          fontSize: config("theme.fontSize.lg"),
          fontFamily: config("theme.fontFamily.sans-serif"),
          textTransform: "uppercase",
          border: "2px solid black",
          padding: "12px",
          letterSpacing: "12px",

        },
      })
    }),
  ],
}
