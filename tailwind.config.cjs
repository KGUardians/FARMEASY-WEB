const tailwindScrollbarHide = require('tailwind-scrollbar-hide');

const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['index.html', './src/**/*.{html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'fp-green': '#9FC031',
        'fp-darkgreen': '#418E26',
      },
    },
  },
  plugins: [tailwindScrollbarHide],
});
