import { readable } from 'svelte/store';

export default readable({}, (set) => {
	fetch(`${import.meta.env.VITE_APP_URL}/directory.json`)
		.then((response) => response.json())
		.then((body) => set(body));
});
