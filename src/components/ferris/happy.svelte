<script lang="ts">
	export let width = 350;
	$: imageHeight = imageWidth / 1.5;
	$: imageWidth = Math.min(width, windowWidth - 40);
	let windowWidth: number;
</script>

<svelte:window bind:outerWidth={windowWidth} />
<img
	src="/images/ferris-happy.svg"
	alt="Rust mascot Ferris is happy"
	title="Rust mascot Ferris is happy"
	width={imageWidth}
	height={imageHeight}
	style="width: {imageWidth}px; {imageHeight}px;"
/>
