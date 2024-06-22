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
    },
    fontSize: {
      'xs': '12px',
      'rg': '16px',
      'sm': '18px',
      'md': '48px'
    },
    fontFamily: {
      'tt-regular': ["tt-regular", "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'tt-medium': ["tt-medium", "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    }
  },
  plugins: [],
}
