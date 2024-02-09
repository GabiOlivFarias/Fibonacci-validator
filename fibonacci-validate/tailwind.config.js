/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      90: '360px',
    },
    minHeight: {
      180: '720px',
    },
    extend: {
      colors: {
        'primary': '#680000',
        'secundary': '#8b0304',
        'tertiary': '#b11116',
        'quaternary': '#ff0000'
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-50': '50% 50%',
        'size-60': '60% 60%',
      },
      backgroundColor: {
        'light-red': '#f9d2d2',
        'medium-red': '#f75959',
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
