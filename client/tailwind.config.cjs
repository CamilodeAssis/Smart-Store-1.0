/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
   
    extend: {

      fontFamily:{
        'roboto': ['Roboto', 'sans-serif', ],
        'playfair': ['Playfair Display' ]
        
      },
      
      colors:{
        'grayBG': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
