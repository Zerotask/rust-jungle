<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={6}
	title="Tuple-like Structs"
	previous="creating-data-in-memory"
	next="unit-like-structs"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Location(i32%2C%20i32)%3B%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20This%20is%20still%20a%20struct%20on%20a%20stack%0A%20%20%20%20let%20loc%20%3D%20Location(42%2C%2032)%3B%0A%20%20%20%20println!(%22%7B%7D%2C%20%7B%7D%22%2C%20loc.0%2C%20loc.1)%3B%0A%7D%0A"
	tags="struct"
>
	<p>For conciseness, you can create structs that are used like a tuple.</p>

	<p>This is a good practice to improve the readability of your code by giving the tuple a name.</p>
</Lesson>
