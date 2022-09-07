const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        gray: colors.stone,
      }
    },
	},
	plugins: [],
}
