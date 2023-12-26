/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['All-Round-Gothic', 'Work Sans', 'Roboto', 'ui-sans-serif', 'system-ui'],
        
          nova: ['Nova Round', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
};
