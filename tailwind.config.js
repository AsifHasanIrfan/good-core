/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'gray': "#edf0f6"
    // },
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xlg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};