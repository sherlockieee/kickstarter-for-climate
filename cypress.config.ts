import { defineConfig } from "cypress";

export default defineConfig({
	viewportHeight: 1000,
	viewportWidth: 1280,

	e2e: {
		supportFile: false,
		baseUrl: "http://localhost:3000",
	},
});
