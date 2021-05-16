<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Playground from '$components/playground.svelte';
	import Ferris from '$components/ferris.svelte';
	import FerrisReading from '$components/ferris-reading.svelte';
	import FurtherInformation from '$components/further-information.svelte';

	export let title: string;
	export let previous: string | null = null;
	export let next: string | null = null;
	export let src: string | null = null;
	export let links: string[] = [];
	export let isSummary = false;

	onMount(() => {
		let link: string = null;

		// Add keyboard navigation
		document.body.addEventListener(
			'keyup',
			(event) => {
				const eventKey = event.key;

				if (['Left', 'ArrowLeft', 'Up', 'ArrowUp'].includes(eventKey)) {
					link = previous;
				}
				if (['Right', 'ArrowRight', 'Down', 'ArrowDown'].includes(eventKey)) {
					link = next;
				}
				if (link) {
					console.log(link);
					goto(link);
				}
			},
			{ once: true, passive: true }
		);

		// Avoid loosing the focus by the iframe.
		const iframeElement = document.querySelector('iframe');
		if (iframeElement) {
			iframeElement.addEventListener('load', () => setTimeout(() => document.body.focus(), 500));
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

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
		<a sveltekit:prefetch class="previous" href={previous} rel="prev">❮ Previous</a>
	{/if}

	{#if next}
		<a sveltekit:prefetch class="next" href={next} rel="prev">Next ❯</a>
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
