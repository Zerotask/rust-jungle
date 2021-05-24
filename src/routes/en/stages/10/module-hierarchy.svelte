<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/book/ch07-05-separating-modules-into-different-files.html',
		'https://doc.rust-lang.org/rust-by-example/mod/split.html'
	];
</script>

<Lesson
	index="8"
	title="Module Hierarchy"
	previous="referencing-multiple-items"
	next="inline-modules"
	{links}
>
	<p>
		A module can depend on another one. In order to establish a relationship between a module and
		its sub-module, you must write in the parent module:<br />
		<code>mod foo;</code>
	</p>

	<p>
		The declaration above will look for a file named <i>foo.rs</i> or <i>foo/mod.rs</i> and will
		insert its contents inside a module named <i>foo</i> under this scope.
	</p>
</Lesson>
