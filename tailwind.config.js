/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '440px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      height: {
        100: '26rem',
        110: '28rem',
        120: '30rem',
        125: '32rem',
        130: '34rem',
        150: '38rem',
        170: '44rem',
      },
      width: {
        76: '19rem',
        100: '26rem',
        110: '28rem',
        130: '34rem',
        150: '38rem',
        160: '40rem',
        165: '42rem',
        170: '44rem',
        180: '46rem',
      },
      brightness: {
        25: '.25',
        35: '.35',
      },
      colors: {
        whatsapp: '#25D366',
        'teal-dark': '#00251a',
        footer: '#16192B',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      height: ['responsive', 'hover', 'focus'],
    },
  },
};
