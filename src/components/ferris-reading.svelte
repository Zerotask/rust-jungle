<script lang="ts">
	import { onMount } from 'svelte';

	export let width = 350;
	let windowWidth: number;

	onMount(() => {
		// Update width if device width is very small.
		width = Math.min(width, windowWidth - 40);
	});
</script>

<svelte:window bind:outerWidth={windowWidth} />
<img
	src="/images/ferris-reading.png"
	alt="Rust mascot Ferris reading a book"
	title="Rust mascot Ferris reading a book"
	{width}
/>
