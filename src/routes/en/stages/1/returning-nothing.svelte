<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={11}
	title="Returning Nothing"
	previous="multiple-return-values"
	next="macros"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20make_nothing()%20-%3E%20()%20%7B%0A%20%20%20%20return%20()%3B%0A%7D%0A%0A%2F%2F%20the%20return%20type%20is%20implied%20as%20()%0Afn%20make_nothing2()%20%7B%0A%20%20%20%20%2F%2F%20this%20function%20will%20return%20()%20if%20nothing%20is%20specified%20to%20return%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%20make_nothing()%3B%0A%20%20%20%20let%20b%20%3D%20make_nothing2()%3B%0A%0A%20%20%20%20%2F%2F%20Printing%20a%20debug%20string%20for%20a%20and%20b%0A%20%20%20%20%2F%2F%20Because%20it's%20hard%20to%20print%20nothingness%0A%20%20%20%20println!(%22The%20value%20of%20a%3A%20%7B%3A%3F%7D%22%2C%20a)%3B%0A%20%20%20%20println!(%22The%20value%20of%20b%3A%20%7B%3A%3F%7D%22%2C%20b)%3B%0A%7D%0A"
>
	<p>
		If no return type is specified for a function, it returns an empty tuple, also known as a <code
			>unit</code
		>.
	</p>

	<p>An empty tuple is represented by <code>()</code>.</p>

	<p>
		Using <code>()</code> is uncommon, but will come up often enough that it's good to know whats happening.
	</p>
</Lesson>
