<script lang="ts">
	import { page } from '$app/stores';
	import LessonsStore from '$stores/lessons';
	import type { LessonData } from '$routes/lessons.json';
	import { onMount } from 'svelte';

	const tag = $page.params.slug;
	let lessonsForTag: Array<LessonData> = [];

	onMount(() => {
		// we have to do it here to avoid the error that localStorage is undefined.
		lessonsForTag = $LessonsStore.pages?.filter((lesson: LessonData) => lesson.tags?.includes(tag));
	});
</script>

<div class="columns">
	<section class="column col-md-12 col-6">
		<h1>All lessons for #{tag}</h1>
		{#each lessonsForTag as lesson}
			<p><a href={lesson.url}>Stage {lesson.stage}.{lesson.index}: {lesson.title}</a></p>
		{:else}
			<p>No lessons found.</p>
		{/each}
	</section>
</div>
