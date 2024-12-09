/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
    {
      extend:{
        colors:{
           'custom-color':'#a9cdec',
           'orange':'#fb873c',
           'sky':'#a9cdec',
           'light-Orange':'#fbba97',
           'NavyBlue':'#00274D',
        },
      },
      fontFamily: {
        display: [ "Parkinsans", "sans-serif"],
        Ribeye:["Piazzolla", "serif"],
        Roboto:["Roboto Condensed", "sans-serif"],
      },
    },
  plugins: [],
}

