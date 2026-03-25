/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D2145',
        blue: '#1658B8',
        'blue-light': '#2472E8',
        accent: '#E67E22',
        'off-white': '#F5F7FC',
        'gray-light': '#E8EDF6',
        'text-soft': '#4A5568',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};