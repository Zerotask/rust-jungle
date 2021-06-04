<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={7}
	title="Creating Modules"
	summary="Rust lets you create modules closely related to your file structure"
	tags="modules"
	previous="referencing-multiple-items"
	next="module-hierarchy"
>
	<p>
		When we think of code, we usually imagine a hierarchy of files organized in directories. Rust
		lets you create modules closely related to your file structure.
	</p>

	<p>
		There are two ways in Rust to declare a module. For example, a module foo can be represented as:
	</p>
	<ul>
		<li>a file named <i>foo.rs</i></li>
		<li>a directory named <i>foo</i> with a file <i>mod.rs</i> inside</li>
	</ul>
</Lesson>
