import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
	// TODO: Remove this once development is done and the site is ready to be deployed
	adapter: cloudflare({ imageService: "passthrough" }),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
		}),
	],
		fonts: [
		{
			provider: fontProviders.google(),
			name: "Plus Jakarta Sans",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "UnifontEX",
			cssVariable: "--font-mono",
			weights: [400],
			fallbacks: ["monospace"],
		},
		// {
		// 	provider: fontProviders.google(),
		// 	name: "Lobster Two",
		// 	cssVariable: "--font-calligraphy",
		// 	weights: [400, 700]
		// }
	],
	devToolbar: { enabled: false },
});