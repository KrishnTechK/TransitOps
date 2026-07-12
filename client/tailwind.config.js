/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080B0F',
          900: '#0A0E13',
          850: '#0E131A',
          800: '#12171E',
          700: '#1A2029',
          600: '#232B36',
          500: '#323C49',
        },
        mist: {
          400: '#5B6672',
          300: '#8A94A3',
          200: '#B7BFC9',
          100: '#E8ECF1',
        },
        signal: {
          amber: '#FFB020',
          teal: '#2AD3C4',
          blue: '#4C8DFF',
          green: '#34D399',
          red: '#F8717A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(42, 211, 196, 0.15)',
      },
    },
  },
  plugins: [],
}
