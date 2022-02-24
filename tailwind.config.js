const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Roboto',],
      'body': ['"Open Sans"',],
    },
    extend: {
      backgroundImage: {
        'hero-image-home': "url('/img/medride-hero.jpg')",
      }
    }
  },
  plugins: [],
}
