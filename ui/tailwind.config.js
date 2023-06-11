module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      // main colors
      'c-lixa-p': '#532094',
      'c-lixa-s': '#657bcb',
      'c-lixa-t': '#74cffb'
      },
      fontFamily: {
        dosis: ["Dosis"],
        barlow: ["Barlow"],
        syne: ["Syne"],
      },
      fontSize: {
          'hxl': ['14rem', {
              'lineHeight': '1',
          }]
      }
    }
  },
  plugins: []
};
