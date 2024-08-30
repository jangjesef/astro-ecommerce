/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'silver-light': '#E8E8E8',
        'silver-dark': '#C0C0C0',
      },
    },
  },
  plugins: [],
}