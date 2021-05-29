<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import type { LessonData } from '$routes/lessons.json';
	import { onMount } from 'svelte';
	import InternalLink from '$components/internal-link.svelte';

	let availableTags: Set<string> = new Set();

	onMount(() => {
		// we have to do it here to avoid the error that localStorage is undefined.
		$LessonsStore.pages.forEach((lesson: LessonData) => {
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

<div class="pure-g">
	<section class="pure-u-1">
		<h1>Available tags</h1>
		{#each Array.from(availableTags) as tag}
			<p>
				<InternalLink href="/en/tags/{tag}">#{tag}</InternalLink>
			</p>
		{:else}
			<p>Loading...</p>
		{/each}
	</section>
</div>
