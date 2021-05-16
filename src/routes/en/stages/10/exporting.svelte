<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 10.11: Exporting"
	previous="internal-module-referencing"
	next="struct-visibility"
>
	<p>
		By default members of a module are not accessible from outside of the module (not even to its
		child modules!). We make members of a module accessible using the pub keyword.
	</p>

	<p>
		By default members of a crate are not accessible outside of the crate. We make members of a
		crate accessible by marking them as <code>pub</code> in the root module of your crate (<i
			>lib.rs</i
		>
		or
		<i>main.rs</i>).
	</p>
</Lesson>
