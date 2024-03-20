import { transformWithEsbuild } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors:{
        Hcolor: '#131921',
        navColor: "#232f3e",
        moonColor: '#e6e6e6',
        peechColor: '#febd69',      
        
        whiteColor: '#fff',

        blackColor: "#000",
        
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
      }
    },
    keyframes:{
      move:{
        '50%': {transform: 'translateY(1rem)'}
      }
    },
    animation:{
      'movingY': 'move 2s linear infinite'
    },
    fontFamily:{
      Roboto:['Roboto', 'sans-serif']
    },
    container: {
      center: true,
      padding: '0px',
      margin: '0px'
    },

  },
  plugins: [],
}