<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={9}
	title="Inline Modules"
	previous="module-hierarchy"
	next="internal-module-referencing"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=mod%20foo%20%7B%0D%0A%20%20%20%20pub%20fn%20bar()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22Hello%20from%20module%20foo!%22)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20pub%20mod%20nested%20%7B%0D%0A%20%20%20%20%20%20%20%20pub%20fn%20bar()%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22Hello%20from%20foo's%20nested%20module!%22)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20foo%3A%3Abar()%3B%0D%0A%20%20%20%20foo%3A%3Anested%3A%3Abar()%3B%0D%0A%7D%0D%0A"
>
	<p>A sub-module can be directly inlined within a module's code.</p>

	<p>
		One very common use for inline modules is creating unit tests. We create an inline module that
		only exists when Rust is used for testing! You already saw an example in a previous lesson.
	</p>

	<p>You can also define modules inside modules, often called nested modules.</p>
</Lesson>
