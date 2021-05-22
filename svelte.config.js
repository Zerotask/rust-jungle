import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import path from 'path';

// @see https://kit.svelte.dev/docs#configuration
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// @see https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// @see https://kit.svelte.dev/docs#adapters
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
