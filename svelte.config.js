import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import path from 'path';
import viteImagetoolsPkg from 'vite-imagetools';
const { imagetools } = viteImagetoolsPkg;

// @see https://kit.svelte.dev/docs#configuration
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// @see https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess({ typescript: true }),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// @see https://kit.svelte.dev/docs#adapters
		adapter: adapter(),

		prerender: {
			enabled: true,
			pages: ['*'],
			crawl: true
		},

		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores')
				}
			},
			plugins: [imagetools()],
			json: {
				namedExports: true
			}
		}
	}
};

export default config;
