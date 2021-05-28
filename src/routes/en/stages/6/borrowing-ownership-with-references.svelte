<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={7}
	title="Borrowing Ownership With References"
	previous="returning-ownership"
	next="borrowing-mutable-ownership-with-references"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20let%20f%20%3D%20%26foo%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20f.x)%3B%0A%20%20%20%20%2F%2F%20f%20is%20dropped%20here%0A%20%20%20%20%2F%2F%20foo%20is%20dropped%20here%0A%7D%0A"
>
	<p>
		References allow us borrow access to a resource with the <code>&</code> operator.
	</p>

	<p>References are also dropped like other resources.</p>
</Lesson>
