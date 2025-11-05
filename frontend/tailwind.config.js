/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#2d5a27',
          light: '#3a7434',
          dark: '#1f3d1b',
        },
        'sage': {
          DEFAULT: '#8ba888',
          light: '#c1d5be',
          lighter: '#e1ede0',
          lightest: '#f5f9f4',
        },
        'cream': '#fdfaf6',
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}