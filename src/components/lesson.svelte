<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Playground from '$components/playground.svelte';
	import FerrisNormal from '$components/ferris/normal.svelte';
	import FerrisHappy from '$components/ferris/happy.svelte';
	import FurtherInformation from '$components/further-information.svelte';
	import ExternalLink from '$components/external-link.svelte';
	import InternalLink from '$components/internal-link.svelte';
	import lastLessonStore from '$stores/lastLesson';
	import LessonsStore from '$stores/lessons';
	import type { LessonData } from '$routes/lessons.json';

	export let index = 1;
	export let title = 'Introduction';
	export let description: string | null = null;
	export let previous: string | null = null;
	export let next: string | null = null;
	export let src: string | null = null;
	export let links: string | string[] | null = null;
	export let tags: string[] | string = [];

	let isIntroduction = false;
	let isSummary = false;
	let lastStage: number;
	let shareTitle: string;
	let url: string;

	// for compatibility. the lessons endpoint needs a string, not an array.
	if (typeof links === 'string') {
		links = links.split(' ');
	}

	if (!Array.isArray(tags)) {
		tags = tags.split(' ');
	}

	const [language, currentPage, currentStage, currentLesson] = $page.path
		.split('/')
		.filter(Boolean);

	// since the 'index' is dropped.
	if (!currentLesson) {
		isIntroduction = true;
	}

	const stage = parseInt(currentStage);
	isSummary = currentLesson === 'summary';

	let lessonsPerStage: Array<LessonData> = [];

	$: urlFacebook = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareTitle}`;
	$: urlTwitter = `https://twitter.com/intent/tweet?source=${url}&text=${shareTitle}`;
	$: urlReddit = `http://www.reddit.com/submit?url=${url}&title=${shareTitle}`;
	$: urlPocket = `https://getpocket.com/save?url=${shareTitle}&title=${shareTitle}`;
	$: urlLinkedin = `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${shareTitle}&summary=&source=${url}`;
	$: urlEmail = `mailto:?subject=${shareTitle}&body=${url}`;
	$: fullTitle = `Stage ${currentStage}.${index}: ${title}`;

	onMount(() => {
		lastStage = $LessonsStore.stages[$LessonsStore.stages.length - 1];

		// Automatically extend navigtion destination for introduction and summary
		if (isIntroduction) {
			index = 1;
			title = 'Introduction';
			next = `${currentStage}/${next}`;

			if (stage > 1) {
				previous = `${stage - 1}/summary`;
			}
		} else if (isSummary) {
			title = 'Summary';
			if (stage < lastStage) {
				next = `../${currentStage + 1}`;
			}
		}

		shareTitle = encodeURIComponent(`Rust Jungle - ${fullTitle}`);
		url = encodeURI(`https://${$page.host}${$page.path}`);

		lessonsPerStage = $LessonsStore.pages.filter((lesson: LessonData) => lesson.stage === stage);

		// Remeber the current lesson, to enable a "continue" (testing)
		lastLessonStore.set({
			stage: currentStage,
			index: index,
			title: fullTitle,
			url: $page.path,
			date: new Date()
		});

		// Avoid loosing the focus by the iframe.
		const iframeElement = document.querySelector('iframe');
		if (iframeElement) {
			iframeElement.addEventListener('load', () => setTimeout(() => document.body.focus(), 250));
		}
	});

	function onKeyboardNavigation(event: KeyboardEvent): void {
		document.body.focus();
		const eventKey = event.key;
		let link: string = null;

		if (['Left', 'ArrowLeft', 'Up', 'ArrowUp'].includes(eventKey)) {
			link = previous;
		}
		if (['Right', 'ArrowRight', 'Down', 'ArrowDown'].includes(eventKey)) {
			link = next;
		}
		if (link) {
			goto(link);
		}
	}
</script>

<svelte:head>
	<title>Rust Jungle - {fullTitle}</title>
	<meta property="og:title" content="Rust Jungle - {fullTitle}" />
	<meta name="twitter:title" content="Rust Jungle - {fullTitle}" />
	<meta property="og:url" content={url} />

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}

	{#if tags && tags.length > 0}
		<meta name="keywords" content="Rust, Programming, Language, Learning, {tags.join(', ')}" />
	{/if}
</svelte:head>

<svelte:body on:keyup|once={onKeyboardNavigation} />

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2">
		<h1>{fullTitle}</h1>

		<slot />

		{#if tags.length > 0}
			<div id="tags">
				Tags:
				{#each tags as tag}
					<span><InternalLink href="/en/tags/{tag}">#{tag}</InternalLink></span>
				{/each}
			</div>
		{/if}

		{#if links && links.length > 0}
			<FurtherInformation {links} />
		{/if}

		<div class="socialMedaShare">
			<!-- Facebook -->
			<ExternalLink href={urlFacebook}>
				<img
					title="Share on Facebook"
					alt="Share on Facebook"
					src="/images/social-media/facebook.png"
					width="32"
					height="32"
				/>
			</ExternalLink>

			<!-- Twitter -->
			<ExternalLink href={urlTwitter}>
				<img
					title="Share on Twitter"
					alt="Share on Twitter"
					src="/images/social-media/twitter.png"
					width="32"
					height="32"
				/>
			</ExternalLink>

			<!-- Reddit -->
			<ExternalLink href={urlReddit}>
				<img
					title="Share on Reddit"
					alt="Share on Reddit"
					src="/images/social-media/reddit.png"
					width="32"
					height="32"
				/>
			</ExternalLink>

			<!-- Pocket -->
			<ExternalLink href={urlPocket}>
				<img
					title="Save on Pocket"
					alt="Save on Pocket"
					src="/images/social-media/pocket.png"
					width="32"
					height="32"
				/>
			</ExternalLink>

			<!-- LinkedIn -->
			<ExternalLink href={urlLinkedin}>
				<img
					title="Share on LinkedIn"
					alt="Share on LinkedIn"
					src="/images/social-media/linkedin.png"
					width="32"
					height="32"
				/>
			</ExternalLink>

			<!-- EMail -->
			<ExternalLink href={urlEmail}>
				<img
					title="Share via email"
					alt="Share via email"
					src="/images/social-media/email.png"
					width="32"
					height="32"
				/>
			</ExternalLink>
		</div>
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		{#if isSummary}
			<FerrisHappy />
		{:else if src}
			<Playground {src} />
		{:else}
			<FerrisNormal />
		{/if}
	</section>
</div>

<div class="lesson-nav">
	{#if previous}
		<a
			class="previous"
			href={previous}
			rel="prev"
			title="Go to the previous lesson"
			aria-label="Go to the previous lesson">❮ Previous</a
		>
	{:else}
		<span />
	{/if}

	{#if lessonsPerStage.length > 0}
		<span class="stageProgress">{index} / {lessonsPerStage.length}</span>
	{/if}

	{#if next}
		<a
			class="next"
			href={next}
			rel="prev"
			title="Go to the next lesson"
			aria-label="Go to the next lesson">Next ❯</a
		>
	{:else}
		<span />
	{/if}
</div>

<style lang="postcss">
	h1 {
		margin-top: 0;
		margin-bottom: 8px;
	}

	.lesson-nav {
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 70px;
		background-color: var(--tertiary-color);
		border-top: 1px solid var(--primary-color);
		margin-left: -20px;
		padding: 10px;
	}

	.lesson-nav a {
		text-decoration: none;
		font-weight: bold;
		font-size: 24px;
		color: var(--text-color);
	}

	.lesson-nav > .previous {
		float: left;
		margin-left: 15px;
	}

	.lesson-nav > .next {
		float: right;
		margin-right: 15px;
	}

	.lesson-nav a:hover {
		text-decoration: none;
		color: var(--primary-color);
		font-weight: bold;
	}

	.stageProgress {
		font-weight: bold;
	}

	.socialMedaShare {
		margin-top: 25px;
		margin-bottom: 20px;
	}

	#tags {
		margin-top: 15px;
	}

	@media screen and (max-width: 840px) {
		section:last-child {
			padding-bottom: 90px;
		}
	}
</style>
