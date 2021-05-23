<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index="4"
	title="Writing A Library"
	previous="writing-a-program"
	next="referencing-other-modules-and-crates"
>
	<p>
		A library has a root module in a file called <i>lib.rs</i>.
	</p>

	<p>
		You can use <i>cargo</i> to create a new libray if you append the <code>--lib</code> flag, e. g.
		<code>cargo new my-library --lib</code>.
	</p>

	<p>This will create a <i>src/lib.rs</i> file for you.</p>
</Lesson>
