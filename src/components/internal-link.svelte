<script lang="ts">
	export let path: string;
	$: href = import.meta.env.VITE_APP_URL + path;
	$: title = `Go to: ${href}`;
</script>

<a {href} {title} aria-label={title}>
	<slot>{href}</slot>
</a>

<style>
	a {
		margin-right: 8px;
	}
</style>
