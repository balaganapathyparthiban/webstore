module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.tsx']
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
