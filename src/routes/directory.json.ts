import fg from 'fast-glob';

export async function get() {
	const pages = await fg(['src/routes/**/[^__]*.svelte']);

	return {
		status: 200,
		body: pages
	};
}
