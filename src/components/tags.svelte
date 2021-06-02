<script lang="ts">
	import LessonsStore from '$stores/lessons';
	import InternalLink from '$components/internal-link.svelte';
</script>

<div class="tags">
	{#each $LessonsStore.tags as tag}
		<span><InternalLink href="/en/tags/{tag}">#{tag}</InternalLink></span>
	{:else}
		<p>Loading...</p>
	{/each}
</div>

<style lang="postcss">
	.tags {
		display: flex;
		flex-wrap: wrap;
	}

	span {
		margin-right: 5px;
	}
</style>
