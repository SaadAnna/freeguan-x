/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s step(15) infinite",
      },
      keyframes: {
        typing: {
          "0%": { width:'0ch' },
          "50%": { width:'15ch' },
          "100%": { width:'0ch' },
        }
      }
    },
    fontFamily: {
      text:[ "Roboto", "serif"],
      
    },
  },
  plugins: [],
}

