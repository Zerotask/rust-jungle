<script lang="ts">
	import { page } from '$app/stores';
	import LessonsStore from '$stores/lessons';
	import { onMount } from 'svelte';
	import FerrisNormal from '$components/ferris/normal.svelte';
	import SocialMediaShare from '$components/lesson/socialMediaShare.svelte';

	const tag = $page.params.slug;
	let lessonsForTag = [];

	onMount(() => {
		// we have to do it here to avoid the error that localStorage is undefined.
		lessonsForTag = $LessonsStore.lessons?.filter((lesson) => lesson.tags?.includes(tag));
	});
</script>

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2 tags">
		<h1>All lessons for #{tag}</h1>
		{#each lessonsForTag as lesson}
			<p><a href={lesson.url}>Stage {lesson.stage}.{lesson.index}: {lesson.title}</a></p>
		{:else}
			<p>No lessons found.</p>
		{/each}
		<SocialMediaShare title="All lessons for #{tag}" />
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		<FerrisNormal />
	</section>
</div>

<style lang="postcss">
	.tags {
		margin-bottom: 25px;
	}
</style>
