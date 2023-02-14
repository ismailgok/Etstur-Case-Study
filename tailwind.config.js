/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#0072C3",
        "success":"#50C70A",
        "point-bg":"#F6F9FD",
        "point":"#0DC5BB",
        "hotel-title":"#202227",
        "input-border":"#DFE3E8",
      },
    },
  },
  plugins: [],
}

