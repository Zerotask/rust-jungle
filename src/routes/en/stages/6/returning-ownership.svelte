<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={6}
	title="Returning Ownership"
	summary="Ownership can also be returned from a function"
	tags="ownership"
	previous="moving-ownership"
	next="borrowing-ownership-with-references"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20do_something()%20-%3E%20Foo%20%7B%0A%20%20%20%20Foo%20%7B%20x%3A%2042%20%7D%0A%20%20%20%20%2F%2F%20ownership%20is%20moved%20out%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo%20%3D%20do_something()%3B%0A%20%20%20%20%2F%2F%20foo%20becomes%20the%20owner%0A%20%20%20%20%2F%2F%20foo%20is%20dropped%20because%20of%20end%20of%20function%20scope%0A%7D%0A"
>
	<p>Ownership can also be returned from a function.</p>
</Lesson>
