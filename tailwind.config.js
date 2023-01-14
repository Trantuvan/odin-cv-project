/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1-4": "1fr 4fr",
      },
      maxHeight: {
        "-10rem": "calc(100vh - 10rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
