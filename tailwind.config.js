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
         'dark': '#9c0606'
        },
        'secondary': {
          'DEFAULT': '#E2E2D5',
          200: '#888883'
        },
        'dark': {
          'DEFAULT': '#333333'
        },
        'light': {
          'DEFAULT': '#F7F7F7'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}