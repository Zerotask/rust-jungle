<script lang="ts">
	import Ferris from '$components/ferris.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<svelte:head>
	<title>Was ist der Rust-Dschungel?</title>
</svelte:head>

<section>
	<h1>Was ist der Rust-Dschungel?</h1>

	<p>
		Der Rust-Dschungel basiert auf der großartigen <i>Tour of Rust</i> und wurde mit dem
		hochperformanten JS-Framework
		<i>SvelteKit</i> gebaut.
	</p>

	<p>
		Rust hat eine steile Lernkurve und für manche Leute könnte das der Grund sein, warum sie sich
		für eine Alternative entscheiden. Meiner Erfahrung nach, sobald man Rust gelernt hat, wird man
		es lieben. Andere teilen die gleiche Meinung, denn sonst wäre Rust nicht
		<ExternalLink
			href="https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/"
		>
			https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/
		</ExternalLink>.
	</p>

	<p>
		Daher versucht Rust-Dschungel dir beim Navigieren durch die großen Themen von Rust zu helfen.
		Und du bist nicht allein!
		<ExternalLink href="https://www.rustacean.net/">Ferris die Krabbe</ExternalLink> wird bei dir sein!
	</p>
</section>

<Ferris />
