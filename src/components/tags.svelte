<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import { onMount } from 'svelte';
	import InternalLink from '$components/internal-link.svelte';

	let availableTags: Set<string> = new Set();

	onMount(() => {
		// we have to do it here to avoid the error that localStorage is undefined.
		$LessonsStore.pages.forEach((lesson) => {
			if (lesson.tags) {
				lesson.tags.forEach((tag) => {
					if (!availableTags.has(tag)) {
						availableTags.add(tag);

						// We have to set this explicitly, otherwiese Svelte's reactivity is not working.
						availableTags = availableTags;
					}
				});
			}
		});
	});
</script>

<div class="tags">
	{#each [...availableTags] as tag}
		<span><InternalLink href="/en/tags/{tag}">#{tag}</InternalLink></span>
	{:else}
		<p>Loading...</p>
	{/each}
</div>

<style lang="postcss">
	.tags {
		display: flex;
		flex-wrap: wrap;
	}

	span {
		margin-right: 5px;
	}
</style>
