/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: "#4283c1",
				secondary: "#2a5176",
				lightAccent: "#93b6d6",
				darkAccent: "#1c242c",
				bgColor: "#010911",
				textColor: "#e2f0fd"
			}
		},
	},
	plugins: [],
}
