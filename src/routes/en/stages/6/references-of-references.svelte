<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={11}
	title="References Of References"
	summary="References can even be used on pieces of references"
	previous="passing-around-borrowed-data"
	next="explicit-lifetimes"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20do_something(a%3A%20%26Foo)%20-%3E%20%26i32%20%7B%0A%20%20%20%20return%20%26a.x%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20mut%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20let%20x%20%3D%20%26mut%20foo.x%3B%0A%20%20%20%20*x%20%3D%2013%3B%0A%20%20%20%20%2F%2F%20x%20is%20dropped%20here%20allow%20us%20to%20create%20a%20non-mutable%20reference%0A%20%20%20%20let%20y%20%3D%20do_something(%26foo)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20y)%3B%0A%20%20%20%20%2F%2F%20y%20is%20dropped%20here%0A%20%20%20%20%2F%2F%20foo%20is%20dropped%20here%0A%7D%0A"
>
	<p>References can even be used on pieces of references.</p>
</Lesson>
