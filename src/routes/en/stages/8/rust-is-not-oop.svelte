<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={3}
	title="Rust Is Not OOP"
	previous="what-is-object-oriented-programming"
	next="encapsulation-with-methods"
>
	<p>Rust lacks inheritance of data and behavior in any meaningful way:</p>
	<ul>
		<li>Structs cannot inherit fields from a parent struct.</li>
		<li>Structs cannot inherit functions from a parent struct.</li>
	</ul>

	<p>
		That said, Rust implements many programming language features, so that you might not mind this
		lacking.
	</p>
</Lesson>
