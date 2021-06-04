<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import InternalLink from '$components/internalLink.svelte';
	import type { LessonData } from '$lib/lessonInterfaces';

	export let language = 'en';

	function getLessonsForStage(stage: number): LessonData[] {
		return $LessonsStore.lessons.filter(
			(lesson: LessonData) => lesson.language === language && lesson.stage === stage
		);
	}
</script>

<svelte:head>
	<title>Overview of all stages</title>
</svelte:head>

{#if $LessonsStore.lessons.length > 0}
	{#each Object.entries($LessonsStore.stages) as [stageIndex, stageTitle]}
		<h2 id={stageIndex}>
			<InternalLink href="/{language}/stages/{stageIndex}"
				>Stage {stageIndex}: {stageTitle}</InternalLink
			>
		</h2>
		<ul>
			{#each getLessonsForStage(parseInt(stageIndex, 10)) as lesson}
				<li>
					<InternalLink href={lesson.url}>{stageIndex}.{lesson.index} {lesson.title}</InternalLink>
				</li>
			{/each}
		</ul>
	{/each}
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
