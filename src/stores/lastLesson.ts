import { writable } from 'svelte/store';

const localStorageKey = 'last-lesson';

const createStore = () => {
	const { subscribe } = writable(null);

	return {
		subscribe,
		set: (value) => localStorage.setItem(localStorageKey, JSON.stringify(value)),
		update: (value) => localStorage.setItem(localStorageKey, JSON.stringify(value)),
		get: () => JSON.parse(localStorage.getItem(localStorageKey)),
		reset: () => localStorage.removeItem(localStorageKey)
	};
};

const store = createStore();

export default store;
