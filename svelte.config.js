import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

// @see https://kit.svelte.dev/docs#configuration
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// @see https://kit.svelte.dev/docs#adapters
		adapter: adapter({
			// default options are shown
			// out: 'build'
			pages: 'public',
			assets: 'public',
			fallback: '200.html'
		}),

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
