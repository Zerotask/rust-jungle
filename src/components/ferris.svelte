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
<img src="/images/ferris.png" alt="Rust mascot Ferris" title="Rust mascot Ferris" {width} />
