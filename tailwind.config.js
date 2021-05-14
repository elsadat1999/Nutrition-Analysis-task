const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: `#9B21A4`,
      secondary: `#8C00E9`,
      tertiary: `#1B0336`,
      danger:"#dc3545",
      success:"#28a745",
      dark:"#140327",
      gray: colors.coolGray,
      pink: colors.pink,
      white: colors.white,
      red: colors.red,
      
    },
    extend: {},

    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1454px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
