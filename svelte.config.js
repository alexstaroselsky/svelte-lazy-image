import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	},
};

export default config;
