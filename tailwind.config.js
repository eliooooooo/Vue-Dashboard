/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/assets/css/*.css",
    './src/*.css'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
         'DEFAULT': '#FF6363',
         'dark': '#DFAF2D'
        },
        'secondary': {
          'DEFAULT': '#E2E2D5',
          200: '#888883'
        }
      },
    },
  },
  plugins: [],
}