// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	buildOptions: {
		site: "https://iamyuu.dev",
		sitemap: true,
	},
	devOptions: {
		port: 5000,
		tailwindConfig: "./tailwind.config.js",
	},
});
