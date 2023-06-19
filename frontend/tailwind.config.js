/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      purple: {
        50: '#fcf5fe',
        100: '#f9eafd',
        200: '#f2d3fb',
        300: '#ebb1f6',
        400: '#da6eed',
        500: '#ce52e3',
        600: '#b433c6',
        700: '#9727a4',
        800: '#7d2286',
        900: '#69216e',
        950: '#440949',
      },
      gray: {
        50: '#f8f8f8',
        100: '#f0f0f0',
        200: '#e4e4e4',
        300: '#d1d1d1',
        400: '#b4b4b4',
        500: '#9e9e9e',
        600: '#818181',
        700: '#6a6a6a',
        800: '#5a5a5a',
        900: '#4e4e4e',
        950: '#282828',
      },

      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [],
};
