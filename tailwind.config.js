module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/index.html',
      './src/pages/404.html',
      './src/pages/offline.html',
      './src/js/calculator.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
