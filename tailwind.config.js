/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "40%": "40% 1fr",
        "1-4": "1fr 4fr",
      },
      gridTemplateRows: {
        "cv-layout": "0.5fr 10fr 0.5fr",
      },
      maxHeight: {
        "-3.5rem": "calc(100vh - 3.5rem)",
      },
      aspectRatio: {
        "10/16": "10/16",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
