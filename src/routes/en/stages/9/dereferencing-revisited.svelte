<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={4}
	title="Dereferencing Revisited"
	summary="The process of accessing / manipulating data that is being referred to by a reference is called dereferencing"
	previous="raw-pointers"
	next="the-dereference-operator"
	furtherInformationUrls="https://doc.rust-lang.org/stable/rust-by-example/flow_control/match/destructuring/destructure_pointers.html"
>
	<p>
		The process of accessing / manipulating data that is being referred to by a reference (i.e.
		<code>&i32</code>) is called dereferencing.
	</p>

	<p>References are used to access/manipulate data in two ways:</p>
	<ul>
		<li>Access to the referred data during assignment of variables.</li>
		<li>Access to fields or methods of the referred data.</li>
	</ul>

	<p>Rust has some powerful operators that allow us to do this.</p>
</Lesson>
