/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1E1B1C',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
     screens:{
'sm': '640px',
'md': '768px',
'lg':'1024',
'xl': '1280',

     },
    extend: {},
  },
  plugins: [],
}
