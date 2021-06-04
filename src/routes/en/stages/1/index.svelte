<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson title="The Basics" next="the-rust-playground">
	<p>
		In the first stage we're going to be exploring the very basics with functions, variables, and
		the most primitive types. Glad to have you on board!
	</p>

	<p>
		To navigate through the Jungle, you can use <i>Previous</i> / <i>Next</i> on the bottom, use the
		arrow left / arrow right keys on the keyboard or swipe left / right on your phone.
	</p>

	<p>
		In case you are wondering who this adorable crab who is speaking to you is, I am Ferris, the
		unofficial mascot for the Rust programming language. Nice to meet you.
	</p>

	<p>
		Once you get familiar with Rust, you can call yourself a Rustacean. That's how people who use,
		contribute or are interested in Rust call themself.
	</p>

	<p>
		Some lessons provide <i>tags</i> to easily find similar lessons. If you click on the menu's
		<i>Search</i>, you'll find a list of all available <i>tags</i> and you have the option to search
		for specific lessons.
	</p>

	<p>
		Some lessons will provide <i>further information</i> from the following official sources:
	</p>
	<ul>
		<li>
			<ExternalLink href="https://doc.rust-lang.org/stable/book">Rust Book</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://doc.rust-lang.org/stable/rust-by-example"
				>Rust by Example</ExternalLink
			>
		</li>
		<li><ExternalLink href="https://docs.rs">the docs website (docs.rs)</ExternalLink></li>
	</ul>
</Lesson>
