<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={10}
	title="Multiple Return Values"
	summary="Rust functions can return multiple values (tuple)"
	tags="functions"
	previous="functions"
	next="returning-nothing"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20swap(x%3A%20i32%2C%20y%3A%20i32)%20-%3E%20(i32%2C%20i32)%20%7B%0A%20%20%20%20return%20(y%2C%20x)%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20return%20a%20tuple%20of%20return%20values%0A%20%20%20%20let%20result%20%3D%20swap(123%2C%20321)%3B%0A%20%20%20%20println!(%22%7B%7D%20%7B%7D%22%2C%20result.0%2C%20result.1)%3B%0A%0A%20%20%20%20%2F%2F%20destructure%20the%20tuple%20into%20two%20variables%20names%0A%20%20%20%20let%20(a%2C%20b)%20%3D%20swap(result.0%2C%20result.1)%3B%0A%20%20%20%20println!(%22%7B%7D%20%7B%7D%22%2C%20a%2C%20b)%3B%0A%7D%0A"
>
	<p>Functions can return multiple values by returning a tuple of values.</p>

	<p>Tuple elements can be referenced by their index number.</p>

	<p>
		Rust supports various kinds of destructuring that we will see in many forms, allowing us to
		extract sub-pieces of data structures in ergonomic ways. Be on the lookout!
	</p>
</Lesson>
