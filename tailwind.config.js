/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Dancing Script", "sans-serif"],
        body: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        main: "linear-gradient(to top, rgba(34,30,63,0.2), rgba(34,30,63,0.2)), url('assets/Background.jpg')",
      },
      colors: {
        overlay: "#221E3F",
        astrea: "#9a90e7",
      },
    },
  },
  plugins: [],
};
