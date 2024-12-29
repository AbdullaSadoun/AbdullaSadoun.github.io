/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#2D2D2D',
        text: '#F5F5F7',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide': 'slide 60s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 