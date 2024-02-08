/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B3977D',
        'secundary': '#E6AA73',
        'tertiary': '#381B00'
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-50': '50% 50%',
        'size-60': '60% 60%',
      },
      backgroundColor: {
        'dark-gray': '#4C4136',
        'light-gray': '#807973',
      },
      fontSize: {
        h1: '64px',
        h2: '48px',
        h3: '32px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
      },
    },
  },
  plugins: [],
}
