<script lang="ts">
	export let href: string;
	export let rel = 'external noreferrer';
	export let target = '_blank';
</script>

<a {href} {rel} {target} title="Open external link: {href}" aria-label="Open external link: {href}">
	<slot>{href}</slot>
</a>
