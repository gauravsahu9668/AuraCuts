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
        },
      },
      fontFamily: {
        display: [ "Parkinsans", "sans-serif"],
        Ribeye:["Piazzolla", "serif"],
      },
    },
  plugins: [],
}

