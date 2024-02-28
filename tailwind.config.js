/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3e72",
        black: "#131110",
        blue: "#4066ff",
        lightBlue: "#eeeeff",
      },
      backgroundImage: {
        BlueGradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        OrangeGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
      },
    },
  },
  plugins: [],
};
