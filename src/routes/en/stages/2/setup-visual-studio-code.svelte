<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
	import ExternalLink from '$components/externalLink.svelte';
</script>

<Lesson
	index={7}
	title="Setup Visual Studio Code"
	tags="developing"
	previous="cargo-subcommands"
	next="writing-a-hello-world-program"
>
	<p>
		I recommend using
		<ExternalLink href="https://code.visualstudio.com">Visual Studio Code</ExternalLink>
		for developing Rust programs.
	</p>

	<p>
		Visual Studio Code is a modular editor which can be extended with with useful tools (called <i
			>extensions</i
		>) to improve your developing experience for Rust programming.
	</p>

	<p>
		Besides <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=rust-lang.rust"
			>the official Rust extension</ExternalLink
		>
		there are also <i>extension packs</i> which offers some additional tools often needed for Rust programming,
		e. g. an extension for TOML files.
	</p>

	<p>
		I can recommend you an extension pack of my own, which you can find here:
		<ExternalLink
			href="https://marketplace.visualstudio.com/items?itemName=Zerotaskx.rust-extension-pack"
			>Rust Extension Pack</ExternalLink
		>.
	</p>
</Lesson>
