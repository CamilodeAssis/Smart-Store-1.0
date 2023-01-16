/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily:{
      'sans': ['Inter', 'sans-serif', ]
    },
    extend: {
      
      colors:{
        'grayBG': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
