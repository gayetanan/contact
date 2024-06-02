/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0",
        },
      },
    },
    screens: {
      md: "460px",
      lg: "540px",
    },
  },
  plugins: [],
};
