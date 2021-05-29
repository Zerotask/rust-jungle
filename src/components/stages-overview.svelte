<script lang="ts">
	import type { LessonData } from '$routes/lessons.json';
	import LessonsStore from '$stores/lessons';
	import { onMount } from 'svelte';
	import InternalLink from '$components/internal-link.svelte';

	export let language = 'en';
	// let lessonsPerStage: Map<number, LessonData[]> = new Map();
	let lessonsPerStage = {};
	const stages = $LessonsStore.stages || [];

	onMount(() => {
		// Sort by index.
		const sortedPages = $LessonsStore.pages.sort((a, b) => a.index - b.index);

		sortedPages.forEach((lesson: LessonData) => {
			if (lesson.language !== language) {
				return;
			}

			const key = lesson.stage;
			if (lessonsPerStage[key]) {
				const existingEntry = lessonsPerStage[key];
				existingEntry.push(lesson);
				lessonsPerStage[key] = existingEntry;
			} else {
				lessonsPerStage[key] = [lesson];
			}

			// Workaround for Svelte's reactivity.
			lessonsPerStage = lessonsPerStage;
		});
	});
</script>

<svelte:head>
	<title>Overview of all stages</title>
</svelte:head>

{#if Object.keys(lessonsPerStage).length > 0}
	{#each stages as stage}
		<h2><InternalLink href="/{language}/stages/{stage}">Stage {stage}: TODO</InternalLink></h2>
		<ul>
			{#each lessonsPerStage[stage] as lesson}
				<li>
					<InternalLink href={lesson.url}>{stage}.{lesson.index} {lesson.title}</InternalLink>
				</li>
			{/each}
		</ul>
	{/each}
{:else}
	<p>Loading</p>
{/if}

<style>
	h2:not(:first-of-type) {
		border-top: 1px solid;
		padding-top: 15px;
	}
</style>
