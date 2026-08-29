/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

