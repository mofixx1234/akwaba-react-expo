/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        akwaba: {
          background: '#F5F7F9',
          surface: '#F5F7F9',
          'surface-container': '#E5E9EB',
          'surface-low': '#EEF1F3',
          'surface-lowest': '#FFFFFF',
          'surface-highest': '#D9DDE0',
          primary: '#006479',
          'primary-dim': '#00576A',
          'primary-fixed-dim': '#28C0E4',
          'primary-container': '#40CEF3',
          secondary: '#40CEF3',
          tertiary: '#2A56B7',
          text: '#2C2F31',
          muted: '#5A6166',
          success: '#2A56B7',
          error: '#B31B25',
          'outline-variant': '#ABADAF',
        },
      },
    },
  },
  plugins: [],
};
