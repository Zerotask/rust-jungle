import { readable } from 'svelte/store';
import { browser } from '$app/env';

const cacheDuration = 3600 * 1000;
const cacheKey = 'lessons';
const endpoint = 'lessons.json';

const getData = async () => {
	const response = await fetch(`${import.meta.env.VITE_APP_URL}/${endpoint}`);
	if (!response.ok) {
		throw new Error('could not fetch lessons.json file.');
	}

	return await response.json();
};

const createStore = () => {
	return readable({ stages: [], pages: [], total: 0 }, (set) => {
		if (browser) {
			const lessons = localStorage.getItem(cacheKey);
			if (lessons) {
				const cachedObject = JSON.parse(lessons);

				// Cache entry is still valid.
				if (cachedObject.expires > Date.now()) {
					set(cachedObject.data);
					return;
				}
			} else {
				getData().then((data) => {
					const cacheObject = {
						expires: Date.now() + cacheDuration,
						data
					};
					localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
					set(data);
				});
			}
		}
	});
};

const store = createStore();

export default store;
