module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        earth: "url('/assets/images/earth.png')",
        logo: "url('/assets/images/navbar_logo.png')",
      },
      colors: {
        primary: "#FFC300",
        secondary: "#FFFFFF",
        blue: {
          400: "#23293B",
          500: "#010031",
          700: "#010024",
          900: "#030C15",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
