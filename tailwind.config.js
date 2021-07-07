module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover'], // Group over added
    visibility: ['responsive', 'group-hover'], // Group over added
    transform: ['responsive', 'group-hover'], // Group over added
    translate: ['responsive', 'hover', 'focus', 'group-hover'], // Group over added
    opacity: ['responsive', 'hover', 'focus', 'group-hover'] // Group over added
  },
  plugins: [ require('@tailwindcss/ui'), require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
