<script lang="ts">
	export let href: string;
	export let rel = 'external noreferrer';
	export let target = '_blank';
</script>

<a {href} {rel} {target} title="Open external link">
	<slot>{href}</slot>
</a>
