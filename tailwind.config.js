/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary orange accent color for CTAs
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',  // Main CTA color
          700: '#c2410c',  // Hover color
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Consistent gray palette
        gray: {
          50: '#f8f8f8',   // Light background for alternating sections
          100: '#f5f5f5',  // Alternative light background
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',  // Body text
          700: '#404040',
          800: '#262626',
          900: '#171717',  // Dark text/headings
        }
      }
    },
  },
  plugins: [],
}