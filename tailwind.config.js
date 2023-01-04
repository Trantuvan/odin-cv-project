/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },
      colors: {
        white: "#d4d4d4",
        purple: "#4338ca",
        midnight: "#171717",
        metal: "#a1a1aa",
        "zinc-50": "#fafafa",
      },
      boxShadow: {
        sm: "0px 2px 4px 0px rgba(11,10,55,0.15)",
        lg: "0px 8px 20px 0px rgba(18,16,99,0.06)",
      },
      fontSize: {
        xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
        sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
        xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
        "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
        "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
        "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
        "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
      },
      fontFamily: {
        satoshi: ["'Satoshi'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
