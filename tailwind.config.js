// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#57b9df',
          light: '#7fc9e6',
          dark: '#3a9bc4',
        },
        secondary: {
          DEFAULT: '#fcde68',
          light: '#fde88f',
          dark: '#dbc053',
        },
        accent: '#ec5b3e',
        background: {
          DEFAULT: '#f7f8f9',
          paper: '#ffffff',
          'secondary-paper': '#f1f1f2',
        },
        textPrimary: '#404041', // Changed from text.primary to avoid nesting
      },
      fontFamily: {
        sans: ['"Roboto"', '"Arial"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
}