/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anon: ["Anonymous Pro"],
        roboto_m: ["Roboto Mono"],
      },
      colors: {
        "bg-gray": "#4A4C4E",
        "bg-black": "#0E0C15",
        "btn-green": "#056B1C",
        "btn-lime": "#829D14",
        "accent-green": "#23A648",
      },
    },
  },
  plugins: [],
};
