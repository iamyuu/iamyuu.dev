/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/**
 * @typedef DaisyUI
 * @property {boolean} [base]
 * @property {boolean} [theme]
 * @property {boolean} [styled]
 * @property {boolean} [utils]
 * @property {boolean} [logs]
 * @property {boolean} [rtl]
 */

/** @typedef { DefaultConfig & { daisyui: DaisyUI; theme: { extend: DefaultTheme } } } TailwindConfig */

/**
 * @type {TailwindConfig}
 * @see {@link https://tailwindcss.com/docs/theme#configuration-reference}
 */
module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
			},
		},
	},
	daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: false,
		rtl: false,
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
