const defaultTheme = require('tailwindcss/defaultTheme');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // jakarta: ['var(--font-jakarta)', ...defaultTheme.fontFamily.sans],
        jakarta: ['var(--font-myFont)', ...fontFamily.sans],
      },
      container: { center: true },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
