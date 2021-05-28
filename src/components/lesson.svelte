<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Playground from '$components/playground.svelte';
	import FerrisNormal from '$components/ferris/normal.svelte';
	import FerrisHappy from '$components/ferris/happy.svelte';
	import FurtherInformation from '$components/further-information.svelte';
	import ExternalLink from '$components/external-link.svelte';
	import lastLessonStore from '$stores/lastLesson';
	import DirectoryStore from '$stores/directory';

	export let index = 1;
	export let title = 'Introduction';
	export let previous: string | null = null;
	export let next: string | null = null;
	export let src: string | null = null;
	export let links: string[] = [];
	let isIntroduction = false;
	let isSummary = false;

	// TODO: set it automatically.
	const lastStage = 10;

	const pathSplit: string[] = $page.path.split('/');

	// Read the lesson name to know if it's an introduction or a summary.
	const lessonName: string = pathSplit[pathSplit.length - 1];
	isSummary = lessonName === 'summary';
	if (!isSummary) {
		isIntroduction = !isNaN(parseInt(lessonName));
	}
	let lessonsPerStage: Array<number> = [];

	// Set current stage
	let currentStage: number = parseInt(pathSplit.pop());
	if (isNaN(currentStage)) {
		currentStage = parseInt(pathSplit.pop());
	}

	// Automatically extend navigtion destination for introduction and summary
	if (isIntroduction) {
		index = 1;
		title = 'Introduction';
		next = `${currentStage}/${next}`;

		if (currentStage > 1) {
			previous = `${currentStage - 1}/summary`;
		}
	} else if (isSummary) {
		title = 'Summary';
		if (currentStage < lastStage) {
			next = `../${currentStage + 1}`;
		}
	}
	const fullTitle = `Stage ${currentStage}.${index}: ${title}`;
	const shareTitle = encodeURIComponent(`Rust Jungle - ${fullTitle}`);
	const url = encodeURI(`https://${$page.host}${$page.path}`);
	$: urlFacebook = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareTitle}`;
	$: urlTwitter = `https://twitter.com/intent/tweet?source=${url}&text=${shareTitle}`;
	$: urlReddit = `http://www.reddit.com/submit?url=${url}&title=${shareTitle}`;
	$: urlPocket = `https://getpocket.com/save?url=${shareTitle}&title=${shareTitle}`;
	$: urlLinkedin = `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${shareTitle}&summary=&source=${url}`;
	$: urlEmail = `mailto:?subject=${shareTitle}&body=${url}`;

	onMount(() => {
		const lang = 'en'; // TODO: read URl to detect language.
		const startsWith = `src/routes/${lang}/stages/${currentStage}/`;
		lessonsPerStage = Array.from($DirectoryStore).filter((value: string) =>
			value.startsWith(`${startsWith}`)
		);

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
</svelte:head>

<svelte:body on:keyup|once={onKeyboardNavigation} />

<div class="columns">
	<section class="column col-md-12 col-6">
		<h1>{fullTitle}</h1>

		<slot />

		{#if links.length > 0}
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

	<section class="column col-md-12 col-6">
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
			sveltekit:prefetch
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
			sveltekit:prefetch
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

<style>
	h1 {
		margin-top: 0;
		margin-bottom: 8px;
		font-size: 34px;
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
		margin-left: -0.4rem;
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

	@media screen and (max-width: 840px) {
		section:last-child {
			padding-bottom: 90px;
		}
	}
</style>
