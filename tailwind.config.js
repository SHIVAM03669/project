/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6464',
          500: '#ff3939',
          600: '#ff1111',
          700: '#e70000',
          800: '#bf0404',
          900: '#9d0a0a',
        },
        customRed: "#ef3837", // Move it outside `primary`
      }
    },
  },
  plugins: [],
}
