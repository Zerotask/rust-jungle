import type { LastLesson } from '$lib/lessonInterfaces';
import { writable } from 'svelte/store';

const localStorageKey = 'last-lesson';

const createStore = () => {
	const { subscribe } = writable(null);

	return {
		subscribe,
		set: (value: LastLesson) => localStorage.setItem(localStorageKey, JSON.stringify(value)),
		update: (value: LastLesson) => localStorage.setItem(localStorageKey, JSON.stringify(value)),
		get: (): LastLesson =>
			localStorage.getItem(localStorageKey)
				? JSON.parse(localStorage.getItem(localStorageKey))
				: null,
		reset: () => localStorage.removeItem(localStorageKey)
	};
};

const store = createStore();

export default store;
