module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    variants: {
      extend: {
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        transform: ['responsive', 'hover', 'focus', 'group-hover'],
      }
    },
  },
  plugins: [],
}
