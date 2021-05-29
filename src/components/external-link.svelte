<script lang="ts">
	export let href: string;
	export let rel = 'external noreferrer';
	export let target = '_blank';
</script>

{#if href}
	<a
		{href}
		{rel}
		{target}
		title="Open external link: {href}"
		aria-label="Open external link: {href}"
	>
		<slot>{href}</slot>
	</a>
{:else}
	<span class="error">ERROR: invalid url</span>
{/if}

<style>
	.error {
		color: #ff0000;
		font-weight: bold;
	}
</style>
