<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Playground from '$components/playground.svelte';
	import Ferris from '$components/ferris.svelte';
	import FerrisReading from '$components/ferris-reading.svelte';
	import FurtherInformation from '$components/further-information.svelte';
	import { lastLesson } from '$stores/lastLesson.js';

	export let title: string;
	export let previous: string | null = null;
	export let next: string | null = null;
	export let src: string | null = null;
	export let links: string[] = [];
	export let isSummary = false;

	onMount(() => {
		// Remeber the current lesson, to enable a "continue" (testing)
		lastLesson.set({ title, url: $page.path, date: new Date() });

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
	<title>Rust Jungle - {title}</title>
	<meta property="og:title" content="Rust Jungle - {title}" />
	<meta name="twitter:title" content="Rust Jungle - {title}" />
	<meta property="og:url" content="https://{$page.host}{$page.path}" />
</svelte:head>

<svelte:body on:keyup|once={onKeyboardNavigation} />

<div class="columns">
	<section class="column col-md-12 col-6">
		<h1>{title}</h1>
		<slot />
		{#if links.length > 0}
			<FurtherInformation {links} />
		{/if}
	</section>

	<section class="column col-md-12 col-6">
		{#if isSummary}
			<FerrisReading />
		{:else if src}
			<Playground {src} />
		{:else}
			<Ferris />
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
	{/if}
</div>

<style>
	h1 {
		margin-top: 0;
		margin-bottom: 8px;
		font-size: 34px;
	}

	.lesson-nav {
		display: block;
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
		margin-left: 20px;
	}

	.lesson-nav > .next {
		float: right;
		margin-right: 20px;
	}

	.lesson-nav a:hover {
		text-decoration: none;
		color: var(--primary-color);
		font-weight: bold;
	}

	@media screen and (max-width: 840px) {
		section:last-child {
			padding-bottom: 90px;
		}
	}
</style>
