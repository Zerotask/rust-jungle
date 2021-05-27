import fg from 'fast-glob';
import pkg from '../../package.json';
import { create } from 'xmlbuilder2';

const getUrl = (page) => {
	return page.replace('src/routes', pkg.url).replace('.svelte', '').replace('index', '');
};

export async function get() {
	const sitemap = create({ version: '1.0' }).ele('urlset', {
		xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
	});

	// Include all svelte files which don't start with two underscores, e. g. __error.svelte
	const pages = await fg(['src/routes/**/[^__]*.svelte']);

	pages.forEach((page) => {
		const url = sitemap.ele('url');
		url.ele('loc').txt(getUrl(page));
		url.ele('changefreq').txt('monthly');
	});

	const xml = sitemap.end({ prettyPrint: true });

	return {
		status: 200,
		headers: {
			'Cache-Control': 'max-age:0, s-max-age=600',
			'Content-Type': 'application/xml'
		},
		body: xml
	};
}