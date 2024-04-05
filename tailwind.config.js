import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'fp-green': '#accb7a',
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
