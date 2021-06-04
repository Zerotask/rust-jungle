<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import InternalLink from '$components/internal-link.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { LessonData } from '$lib/lessonInterfaces';
	import { buildName } from '$lib/lessons';

	export let placeholder = 'Search for lessons';

	let results: LessonData[] = [];
	let searchValue = '';

	onMount(() => {
		// consider URL query, e. g. ?q=string
		const searchQuery: string = $page.query.get('q');
		if (searchQuery) {
			search(searchQuery);
		}
	});

	function onInputSearch(event): void {
		search(event.target.value.trim().toLowerCase());
	}

	function search(value: string): void {
		if (value.length < 2) {
			return;
		}

		searchValue = value;
		results = $LessonsStore.lessons.filter(
			(lesson: LessonData) =>
				lesson.title.toLowerCase().includes(value) ||
				lesson.summary.toLowerCase().includes(value) ||
				lesson.content.toLowerCase().includes(value)
		);
	}
</script>

<div class="search">
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
					>{buildName(lesson.stage, lesson.index, lesson.title)}</InternalLink
				>
			</p>
		{/each}
	</div>
</div>

<style lang="postcss">
	.search {
		margin-top: 20px;
	}

	.searchResults {
		margin-top: 10px;
	}
	.searchResults p {
		margin-bottom: 3px;
	}
</style>
