/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#003BE2',
          lime: '#D4FB20',
          dark: '#050505',
          card: '#242528',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F6',
            200: '#E5E6E8',
            300: '#D1D3D7',
            400: '#82868E',
            500: '#646871',
            700: '#242528',
            900: '#0F1012'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0px 10px 30px rgba(0, 0, 0, 0.04)',
        'floating': '0px 20px 40px rgba(0, 0, 0, 0.1)',
        'lime': '0px 0px 25px rgba(212, 251, 32, 0.4)',
      },
      backgroundImage: {
        'blue-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
