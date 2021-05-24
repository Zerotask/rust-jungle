<script lang="ts">
	export let width = 350;
	$: imageHeight = imageWidth / 1.5;
	$: imageWidth = Math.min(width, windowWidth - 40);
	let windowWidth: number;
</script>

<svelte:window bind:outerWidth={windowWidth} />
<img
	src="/images/ferris-gesture.svg"
	alt="Rust mascot Ferris is gesturing"
	title="Rust mascot Ferris is gesturing"
	width={imageWidth}
	height={imageHeight}
	style="width: {imageWidth}px; {imageHeight}px;"
/>
