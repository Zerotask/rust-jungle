<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import { onMount } from 'svelte';
	import InternalLink from '$components/internal-link.svelte';

	export let language = 'en';
	$: lessonsPerStage = {};

	onMount(() => {
		// Sort by index.
		const sortedPages = $LessonsStore.lessons.sort((a, b) => a.index - b.index);

		sortedPages.forEach((lesson) => {
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

{#if Object.keys(lessonsPerStage).length > 0 && Object.keys($LessonsStore.stages).length > 0}
	{#each Object.entries($LessonsStore.stages) as [stageIndex, stageTitle]}
		<h2>
			<InternalLink href="/{language}/stages/{stageIndex}"
				>Stage {stageIndex}: {stageTitle}</InternalLink
			>
		</h2>
		<ul>
			{#each lessonsPerStage[stageIndex] as lesson}
				<li>
					<InternalLink href={lesson.url}>{stageIndex}.{lesson.index} {lesson.title}</InternalLink>
				</li>
			{/each}
		</ul>
	{/each}
{:else}
	<p>Loading...</p>
{/if}

<style lang="postcss">
	h2 {
		margin-bottom: 10px;
	}

	h2:not(:first-of-type) {
		border-top: 1px solid;
		padding-top: 15px;
	}

	ul {
		margin-top: 5px;
	}
</style>
