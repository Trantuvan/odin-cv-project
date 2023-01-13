/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1-4": "1fr 4fr",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
