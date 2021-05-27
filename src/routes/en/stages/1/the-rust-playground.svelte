<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson
	index={2}
	title="The Rust Playground"
	previous="./"
	next="variables"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Welcome%20to%20the%20playground!%20You%20can%20modify%20the%20code%20in%20here.%22)%3B%0A%7D%0A"
>
	<p>
		Rust Jungle uses an interactive coding tool from
		<ExternalLink href="https://play.rust-lang.org">Rust Playground</ExternalLink>.
	</p>

	<p>It's a great way to play around with Rust and show others your creativity and challenges!</p>

	<p>
		Besides the Rust Playground we use a code highlighting for Rust language specific parts in the
		text and italic for other special words or phrases.
	</p>

	<p>
		After you learned the very basics, you will learn in stage 2 how to develop with Rust locally.
	</p>
</Lesson>
