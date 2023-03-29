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
    extend: {
      colors: {
        // 'gray': "#edf0f6"
        "gray-bg": "#ebeef6",
        "gray-border": "#d8dbe5",
        "gray-100": "#f5f9fc",
        heading: "#212125",
        primary: "#1f92f4",
        "primary-100": "#2f73ac",
        "primary-300": "#007bff",
      },
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
