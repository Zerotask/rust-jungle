<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={2}
	title="Ownership"
	summary="Ownership is a very unique feature and the reason for Rust's memory safety"
	tags="ownership memory"
	previous="./"
	next="scope-based-resource-management"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20We%20instantiate%20structs%20and%20bind%20to%20variables%0A%20%20%20%20%2F%2F%20to%20create%20memory%20resources%0A%20%20%20%20let%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20%2F%2F%20foo%20is%20the%20owner%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"
>
	<p>
		Instantiating a type and binding it to a variable name creates a memory resource that the Rust
		compiler will validate through its whole lifetime. The bound variable is called the resource's
		owner.
	</p>

	<p>Ownership is a very unique feature and the reason for Rust's memory safety.</p>
</Lesson>
