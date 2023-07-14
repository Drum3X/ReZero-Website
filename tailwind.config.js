/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rem": "rgb(73, 82, 249)",
        "ram": "rgb(223, 18, 81)",
        "primary-text": "rgb(44, 20, 56)",
        "primary-bg": "rgb(6, 6, 8)",
      },
      backgroundImage: {
        "main": "linear-gradient(to bottom right, rgba(223, 18, 81, 0.3) 15%, transparent, rgba(73, 82, 249, 0.3) 80%), url('/images/background.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
