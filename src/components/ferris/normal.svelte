<script lang="ts">
	export let width = 350;
	$: imageHeight = imageWidth / 1.5;
	$: imageWidth = Math.min(width, windowWidth - 40);
	let windowWidth: number;
</script>

<svelte:window bind:outerWidth={windowWidth} />
<img
	src="/images/ferris-normal.svg"
	alt="Rust mascot Ferris"
	title="Rust mascot Ferris"
	width={imageWidth}
	height={imageHeight}
	style="width: {imageWidth}px; height:{imageHeight}px;"
/>
