import { readable } from 'svelte/store';
import { onMount } from 'svelte';

export interface LessonData {
	url: string;
	language: string;
	stage: number;
	index: number;
	title: string;
	tags: string[];
	previous?: string;
	next?: string;
	playground: string;
	furtherInformation?: string[];
	content?: string;
}

export interface Lessons {
	total: number;
	stages: number[];
	lessons: LessonData[];
}

// 1 hour
const cacheDuration = 3600 * 1000;
const cacheKey = 'lessons';
const endpoint = 'lessons.json';

export default readable({}, (set) => {
	onMount(() => {
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
			.then((body: Lessons) => {
				const cacheObject = {
					expires: Date.now() + cacheDuration,
					data: body
				};
				localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
				set(body);
			});
	});
});
