<script lang="ts">
	export let width = 350;
	$: imageHeight = imageWidth / (3 / 2.3);
	$: imageWidth = Math.min(width, windowWidth - 40);
	let windowWidth: number;
</script>

<svelte:window bind:outerWidth={windowWidth} />
<img
	src="/images/ferris-reading.png"
	alt="Rust mascot Ferris reading a book"
	title="Rust mascot Ferris reading a book"
	width={imageWidth}
	height={imageHeight}
/>
