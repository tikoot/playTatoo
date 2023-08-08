const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				orange: {
					300: "#f7d85b",
					500: "#f69309",
				},
			},
			gridTemplateColumns: {
				contact: "320px auto",
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><polygon fill="${value}" fillRule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
};
