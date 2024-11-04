/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
				accentPrimary: "rgba(var(--accent-primary))",
				accentSecondary: "rgba(var(--accent-secondary))",
				bgColor: "rgba(var(--bgColor))",
				textColor: "rgba(var(--textColor))"
			}
		},
	},
	plugins: [],
}
