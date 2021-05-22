<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/std/primitive.array.html'];
</script>

<Lesson
	title="Stage 1.8: Arrays"
	previous="constants"
	next="functions"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20nums%3A%20%5Bi32%3B%203%5D%20%3D%20%5B1%2C%202%2C%203%5D%3B%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20nums)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20nums%5B1%5D)%3B%0A%7D%0A"
	{links}
>
	<p>
		An array is a <i>fixed length collection</i> of data elements all of the same type.
	</p>

	<p>
		The data type for an array is <code>[T; N]</code> where T is the elements' type, and N is the fixed
		length known at compile-time.
	</p>

	<p>
		Individual elements can be retrieved with the <code>[x]</code> operator where x is a usize index
		(starting at 0) of the element you want.
	</p>

	<p>
		Collections with a dynamic length, often called dynamic or variable arrays, are introduced in a
		later chapter about Vectors.
	</p>
</Lesson>
