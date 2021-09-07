// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ["hover"],
      maxHeight: ["focus"],
    },
  },
  plugins: [],
};
