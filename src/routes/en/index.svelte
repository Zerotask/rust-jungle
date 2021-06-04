<script lang="ts">
	import FerrisNormal from '$components/ferris/normal.svelte';
</script>

<svelte:head>
	<title>Welcome to the Rust Jungle</title>
</svelte:head>

<div class="pure-g">
	<section class="pure-u-1 pure-u-md-1-2">
		<h1>Welcome to Rust Jungle!</h1>

		<p>Rust Jungle is an interactive tutorial to help you learn the Rust programming language.</p>

		<p>
			The audience for this tutorial are mainly beginners, but also advanced Rustaceans can use it.
		</p>

		<p>Rust Jungle is divided into <b>Stages</b> and each stage consists of multiple lessons.</p>

		<p>
			Most lessons will provide an interactive playground where you can run Rust code and find
			further information links to learn more about specific topics.
		</p>

		<p>
			You can navigate through the Rust Jungle by either clicking on Previous / Next or you can
			simply use your arrow key on your keyboard or swipe left / right on your phone.
		</p>

		<p>
			Do you like a lesson and want to share it? No problem! We provide social share options for
			that.
		</p>

		<p>
			Besides the regular learning path through the Rust Jungle, you can also jump to the <b
				>Search</b
			> and find a list of tags, which categorize lessons. Additionally you can search for specific lessons.
		</p>

		<p>We wish you much fun on your journey through the Rust Jungle.</p>
	</section>

	<section class="pure-u-1 pure-u-md-1-2">
		<FerrisNormal />
	</section>
</div>
