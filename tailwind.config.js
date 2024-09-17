/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{

      'sm-2x' : '320px',

      'sm-x' : '375px',

      'sm': '425px',
      

      'md': '768px',
      

      'lg': '1024px',
      

      'xl': '1280px',
      

      '2xl': '1536px',
    }
  },
  plugins: [],
}

