/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-global': '#003',
        'primary': '#676cdb',
      },
    },
  },
  plugins: [],
}