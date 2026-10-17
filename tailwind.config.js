/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1526',
        navy: '#13233d',
        cream: '#f8f4ec',
        sand: '#efe7d9',
        accent: '#ff7a3d',
        accentDark: '#e5622a',
        mint: '#3ddc97',
      },
      fontFamily: {
        body: ['"DM Sans"', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
