<script lang="ts">
	import ExternalLink from '$components/external-link.svelte';
	export let links: string[] = [];
</script>

{#if links.length > 0}
	<p>Further information:</p>
	<ul>
		{#each links as link}
			<li><ExternalLink href={link} /></li>
		{/each}
	</ul>
{/if}

<style>
	p {
		margin-bottom: 5px;
		margin-top: 25px;
		font-size: 18px;
	}

	ul {
		margin-top: 0;
	}

	ul li {
		margin-top: 3px;
	}
</style>
