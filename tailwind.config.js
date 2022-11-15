/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#424242",
        body: "#eceff1",
        "card-bg": "#f5f5f5",
        grayBody: "#1565c015",
      },
      boxShadow: {
        card: "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
