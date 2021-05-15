<script lang="ts">
	import Ferris from '$components/ferris.svelte';
</script>

<svelte:head>
	<title>Welcome to the Rust Jungle</title>
</svelte:head>

<div class="columns">
	<section class="column col-md-12 col-6">
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

	<section class="column col-md-12 col-6">
		<Ferris />
	</section>
</div>
