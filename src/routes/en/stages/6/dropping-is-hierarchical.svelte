<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={4}
	title="Dropping Is Hierarchical"
	previous="scope-based-resource-management"
	next="moving-ownership"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Bar%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Astruct%20Foo%20%7B%0A%20%20%20%20bar%3A%20Bar%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo%20%3D%20Foo%20%7B%20bar%3A%20Bar%20%7B%20x%3A%2042%20%7D%20%7D%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo.bar.x)%3B%0A%20%20%20%20%2F%2F%20foo%20is%20dropped%20first%0A%20%20%20%20%2F%2F%20then%20foo.bar%20is%20dropped%0A%7D%0A"
>
	<p>
		When a struct is dropped, the struct itself is dropped first, then its children are dropped
		individually, and so on.
	</p>

	<p>Memory details:</p>
	<ul>
		<li>By automatically freeing memory Rust helps ensure that there are fewer memory leaks.</li>
		<li>Memory resources can only be dropped once.</li>
	</ul>
</Lesson>
