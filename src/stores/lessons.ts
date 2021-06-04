import { readable } from 'svelte/store';
import { browser } from '$app/env';
import type { Lessons } from '$lib/lessonInterfaces';

interface CachedObject {
	expires: number;
	data: Lessons;
}

// 2 hours
const cacheDuration = 7200 * 1000;
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
	return readable({ tags: [], stages: {}, lessons: [] }, (set) => {
		if (browser) {
			const lessons: string | null = localStorage.getItem(cacheKey);
			if (lessons) {
				const cachedObject: CachedObject = JSON.parse(lessons);

				// Cache entry is still valid.
				if (cachedObject.expires > Date.now()) {
					set(cachedObject.data);
					return;
				}
			}

			getData().then((data: Lessons) => {
				const cacheObject: CachedObject = {
					expires: Date.now() + cacheDuration,
					data
				};
				localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
				set(data);
			});
		}
	});
};

const store = createStore();

export default store;
