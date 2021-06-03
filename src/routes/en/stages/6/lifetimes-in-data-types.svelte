<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={15}
	title="Lifetimes In Data Types"
	previous="static-lifetimes"
	next="summary"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%3C'a%3E%20%7B%0A%20%20%20%20i%3A%26'a%20i32%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20x%20%3D%2042%3B%0A%20%20%20%20let%20foo%20%3D%20Foo%20%7B%0A%20%20%20%20%20%20%20%20i%3A%20%26x%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22%7B%7D%22%2Cfoo.i)%3B%0A%7D%0A"
>
	<p>
		Similarly to functions, data types can be parameterized with lifetime specifiers of its members.
	</p>

	<p>
		Rust validates that the containing data structure of the references never lasts longer than the
		owners its references point to.
	</p>

	<p>We can't have structs running around with references pointing to nothingness!</p>
</Lesson>
