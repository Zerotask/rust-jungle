<script lang="ts">
	import ExternalLink from '$components/external-link.svelte';
</script>

<svelte:head>
	<title>What is Rust Jungle</title>
</svelte:head>

<section>
	<h1>About Rust Jungle</h1>

	<p>
		Rust Jungle is based on the awesome Tour of Rust and is built with the high-performance JS
		framework SvelteKit.
	</p>

	<p>
		This project is open source and you're welcome to contribute to it via <ExternalLink
			href="https://github.com/Zerotask/rust-jungle">GitHub</ExternalLink
		>.
	</p>

	<p>
		Rust has a steep learning curve and for some people this might be the reason to look for an
		alternative.<br />In my experience, once you've learned Rust, you will love it. Others share my
		experience, otherwise it wouldn't be the
		<ExternalLink href="https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular"
			>most loved language for four years in a row</ExternalLink
		>.
	</p>

	<p>
		The goal of Rust Jungle is to give you an easy start with the Rust programming language with
		short but useful lessons, separated into stages.<br />And you are not alone in the Rust Jungle! <ExternalLink
			href="https://www.rustacean.net">Ferris the crab</ExternalLink
		> will be with you!
	</p>

	<h2>Structure of Rust Jungle</h2>
	<p>
		Rust Jungle is separated into stages and every stage has multiple lessons. A lesson consists of
		a small portion of text with an optional running code example and optional further information.
	</p>
	<p>The text just uses 2 kinds of highlighting:</p>
	<ul>
		<li>
			<code>Code blocks</code> - Rust syntax elements have a dark background and a white color.
		</li>
		<li><i>Special words</i> - special words or phrases are highlighted with an italic font.</li>
	</ul>

	<p>
		Every stage starts with an introduction which covers all following lessons from that stage in
		short. It ends with a short summary of that stage.<br />You can easily ifentify summaries by
		watching out for a reading Ferris.
	</p>

	<h2>Community</h2>
	<p>
		You're welcome to join <ExternalLink href="https://discord.gg/cYw6q6D4tr"
			>the official Discord server</ExternalLink
		> to connect with other Rustaceans. This is also a place to ask for further help.
	</p>
</section>
