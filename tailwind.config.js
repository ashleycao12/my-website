module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'warmPink-1':'rgb(255, 250, 247)',
        'warmPink-2':'rgb(255, 217, 195)',
        'warmPink-3':'rgb(239, 166, 144)',

      },
      borderRadius:{
        '4xl':'2.2rem',
      },
      fontFamily: {
        'bogart':'bogart',
        'biotif': 'biotif',
      },
      width:{
        '92':'23rem'
      } 
    },
  },
  plugins: [],
}
