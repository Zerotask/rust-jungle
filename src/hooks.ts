/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }): Promise<Response> {
	const response: Response = await resolve(event);
	const body = await response.text();

	return new Response(body, {
		headers: {
			...response.headers,
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'text/html'
		}
	});
}
