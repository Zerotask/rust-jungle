<script lang="ts">
	import Search from '$components/search.svelte';
	import Tags from '$components/tags.svelte';
	import FerrisNormal from '$components/ferris/normal.svelte';
</script>

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2 search">
		<h1>Search for lessons</h1>

		<Tags />
		<Search />
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		<FerrisNormal />
	</section>
</div>

<style lang="postcss">
	.search {
		margin-bottom: 25px;
	}
</style>
