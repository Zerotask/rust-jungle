/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, render }) {
	const response = await render(request);

	return {
		...response,
		headers: {
			...response.headers,
			'Access-Control-Allow-Origin': '*'
		}
	};
}
