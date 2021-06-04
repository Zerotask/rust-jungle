<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson index={2} title="References Revisited" previous="./" next="raw-pointers">
	<p>
		A reference is fundamentally just a number that is the start position of some bytes in memory.
		Its only purpose is to represent the concept of where data of a specific type exists. What makes
		a reference different from just a number is that Rust will validate the lifetime of references
		doesn't last longer than what it refers to (otherwise we'd get an error when we used it!).
	</p>
</Lesson>
