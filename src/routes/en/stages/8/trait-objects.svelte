<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={10}
	title="Trait Objects"
	previous="dynamic-vs-static-dispatch"
	next="handling-unsized-data"
	links="https://doc.rust-lang.org/book/ch17-02-trait-objects.html https://doc.rust-lang.org/reference/types/trait-object.html"
>
	<p>
		When we pass an instance of an object to a parameter of type <code>&dyn MyTrait</code> we pass what
		is called a trait object.
	</p>

	<p>
		A trait object is what allows us to indirectly call the correct methods of an instance. A trait
		object is a struct that holds the pointer of our instance with a list of function pointers to
		our instance's methods.
	</p>

	<p>Memory details:</p>
	<ul>
		<li>This list of functions is known in C++ as a <i>vtable</i>.</li>
	</ul>
</Lesson>
