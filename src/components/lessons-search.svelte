<script lang="ts">
	import type { LessonData } from '$routes/lessons.json';
	import LessonsStore from '$stores/lessons';
	import InternalLink from '$components/internal-link.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let placeholder: string = 'Search for lessons';

	let results: LessonData[] = [];
	let searchValue: string = '';

	onMount(() => {
		// consider URL query
		const searchQuery = $page.query.get('search');
		if (searchQuery) {
			search(searchQuery);
		}
	});

	function onInputSearch(event) {
		search(event.target.value.trim().toLowerCase());
	}

	function search(value) {
		if (value.length < 2) {
			return;
		}

		searchValue = value;
		results = $LessonsStore.pages.filter(
			(lesson: LessonData) =>
				lesson.title.toLowerCase().includes(value) || lesson.content.toLowerCase().includes(value)
		);
	}
</script>

<input
	type="search"
	{placeholder}
	on:input={onInputSearch}
	bind:value={searchValue}
	autocomplete="false"
/>

<div class="searchResults">
	{#if results.length === 1}
		<p>1 lesson found.</p>
	{:else}
		<p>{results.length} lessons found.</p>
	{/if}

	{#each results as lesson}
		<p>
			<InternalLink href={lesson.url}
				>Stage {lesson.stage}.{lesson.index}: {lesson.title}</InternalLink
			>
		</p>
	{/each}
</div>

<style lang="postcss">
	.searchResults {
		margin-top: 10px;
	}
	.searchResults p {
		margin-bottom: 3px;
	}
</style>
