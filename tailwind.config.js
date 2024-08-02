/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.vue", "./componets/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  darkMode: 'selector'
}

