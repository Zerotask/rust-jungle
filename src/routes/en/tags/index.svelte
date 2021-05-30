<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import { onMount } from 'svelte';
	import InternalLink from '$components/internal-link.svelte';
	import FerrisNormal from '$components/ferris/normal.svelte';

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

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2">
		<h1>Available tags</h1>
		{#each [...availableTags] as tag}
			<p>
				<InternalLink href="/en/tags/{tag}">#{tag}</InternalLink>
			</p>
		{:else}
			<p>Loading...</p>
		{/each}
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		<FerrisNormal />
	</section>
</div>
