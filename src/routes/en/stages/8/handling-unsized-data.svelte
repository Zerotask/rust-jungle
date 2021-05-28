<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/nomicon/exotic-sizes.html#dynamically-sized-types-dsts'
	];
</script>

<Lesson
	index={11}
	title="Handling Unsized Data"
	previous="trait-objects"
	next="generic-functions"
	{links}
>
	<p>
		Traits introduce an interesting challenge when we want to store them within another struct.
		Traits obfuscate the original struct thus it also obfuscates the original size. Unsized values
		being stored in structs are handled in two ways in Rust:
	</p>
	<ul>
		<li>
			<i>generics</i> - Using parameterized types effectively create struct/functions known types and
			thus known sizes.
		</li>
		<li>
			<i>indirection</i> - Putting instances on the heap gives us a level of indirection that allow us
			to not have to worry about the size of the actual type and just store a pointer to it. There are
			other ways as well!
		</li>
	</ul>
</Lesson>
