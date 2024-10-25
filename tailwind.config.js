/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/images/1.webp)",
      },
    },
  },
  plugins: [require("daisyui")],
};
