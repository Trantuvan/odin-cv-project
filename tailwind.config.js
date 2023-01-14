/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "32%": "32% 1fr",
        "40%": "40% 1fr",
        "1-4": "1fr 4fr",
      },
      gridTemplateRows: {
        "cv-layout": "20px 1fr 20px",
      },
      maxHeight: {
        "-3.5rem": "calc(100vh - 3.5rem)",
      },
      aspectRatio: {
        "3/4": "3/4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
