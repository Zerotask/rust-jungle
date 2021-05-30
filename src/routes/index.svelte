<!-- TODO: redirect to /en -->
<script lang="ts">
	import FerrisNormal from '$components/ferris/normal.svelte';
</script>

<svelte:head>
	<title>Welcome to the Rust Jungle</title>
</svelte:head>

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2">
		<h1>Welcome to Rust Jungle!</h1>
		<p>Rust Jungle will help you learning the Rust programming language.</p>
		<p>
			Click on <a href="en/stages">Stages</a> or start directly with the
			<a href="en/stages/1">first lesson</a>
		</p>
		<p>
			To get information about this project, you can visit the <a href="en/about">About</a> page.
		</p>
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		<FerrisNormal />
	</section>
</div>
