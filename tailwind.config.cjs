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
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        spin: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [tailwindScrollbarHide],
});
