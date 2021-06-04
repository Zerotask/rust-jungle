<script lang="ts">
	import Tags from '$components/tags.svelte';
	import FerrisNormal from '$components/ferris/normal.svelte';
	import SocialMediaShare from '$components/lesson/socialMediaShare.svelte';
</script>

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2 tags">
		<h1>Available tags</h1>

		<Tags />
		<SocialMediaShare title="Available tags" />
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		<FerrisNormal />
	</section>
</div>

<style lang="postcss">
	.tags {
		margin-bottom: 25px;
	}
</style>
