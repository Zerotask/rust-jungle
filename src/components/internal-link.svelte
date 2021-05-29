<script lang="ts">
	export let href: string;
	let title = `Go to: ${href}`;
</script>

{#if href}
	<a {href} {title} aria-label={title}>
		<slot>{href}</slot>
	</a>
{:else}
	<span class="error">ERROR: invalid url</span>
{/if}

<style lang="postcss">
	a {
		margin-right: 8px;
	}
</style>
