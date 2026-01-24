
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
    // ... other plugins
  ],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6', // usage: bg-brand, text-brand
        'brand-dark': '#1e3a8a',
        accent: {
          light: '#fde68a',
          DEFAULT: '#f59e0b', // usage: bg-accent
          dark: '#b45309',
        },
      },
    },
  },
}
