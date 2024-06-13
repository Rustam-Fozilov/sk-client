/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      ...colors,
      'soft-white': '#F5F5F7',
      'soft-gray': '#E9E9E9',
      'primary-blue': '#007AFF',
    }
  },
  plugins: [],
}

