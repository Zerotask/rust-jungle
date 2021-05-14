<script lang="ts">
	import Playground from '$components/playground.svelte';
	import Ferris from '$components/ferris.svelte';
	export let title: string;
	export let previous: string | null = null;
	export let next: string | null = null;
	export let src: string | null = null;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<h1>{title}</h1>
	<slot />
</section>

<section>
	{#if src}
		<Playground {src} />
	{:else}
		<Ferris />
	{/if}
</section>

<div class="lesson-nav">
	{#if previous}
		<a sveltekit:prefetch class="previous" href={previous} rel="prev">❮ Previous</a>
	{/if}

	{#if next}
		<a sveltekit:prefetch class="next" href={next} rel="prev">Next ❯</a>
	{/if}
</div>

<style>
	.lesson-nav {
		display: block;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 30px;
		background-color: #94d894;
		border-top: 1px solid var(--primary-color);
		padding: 10px;
	}

	.lesson-nav a {
		text-decoration: none;
		font-weight: bold;
		font-size: 20px;
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

	section {
		width: 50%;
	}
</style>
