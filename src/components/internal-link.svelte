<script lang="ts">
	export let href: string;
	let title = `Go to: ${href}`;
</script>

<a {href} {title} aria-label={title}>
	<slot>{href}</slot>
</a>

<style>
	a {
		margin-right: 8px;
	}
</style>
