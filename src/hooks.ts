/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }): Promise<any> {
	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers,
			'Access-Control-Allow-Origin': '*'
		}
	};
}
