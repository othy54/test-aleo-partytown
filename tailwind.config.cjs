/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function({ addComponents }) {
			addComponents({
				".section": {
					paddingLeft: '20px',
					paddingRight: '20px',
					'@screen md': {
						paddingLeft: '40px',
						paddingRight: '40px',
					},
					'@screen lg': {
						paddingLeft: '80px',
						paddingRight: '80px',
					},

				}
			})
	}],
}
