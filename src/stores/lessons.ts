import { readable } from 'svelte/store';
import type { LessonData } from '$routes/lessons.json';

// 1 hour
const cacheDuration = 3600 * 1000;
const cacheKey = 'lessons';
const endpoint = 'lessons.json';

export default readable({}, (set) => {
	const lessons = localStorage.getItem(cacheKey);
	if (lessons) {
		const cachedObject = JSON.parse(lessons);

		// Cache entry is still valid.
		if (cachedObject.expires > Date.now()) {
			set(cachedObject.data);
			return;
		}
	}

	// Not cached, fetch it via HTTP and cache it.
	fetch(`${import.meta.env.VITE_APP_URL}/${endpoint}`)
		.then((response) => response.json())
		.then((body: LessonData) => {
			const cacheObject = {
				expires: Date.now() + cacheDuration,
				data: body
			};
			localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
			set(body);
		});
});
