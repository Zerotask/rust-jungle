<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={9}
	title="Dereferencing"
	previous="borrowing-mutable-ownership-with-references"
	next="passing-around-borrowed-data"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20foo%20%3D%2042%3B%0A%20%20%20%20let%20f%20%3D%20%26mut%20foo%3B%0A%20%20%20%20let%20bar%20%3D%20*f%3B%20%2F%2F%20get%20a%20copy%20of%20the%20owner's%20value%0A%20%20%20%20*f%20%3D%2013%3B%20%20%20%20%20%20%2F%2F%20set%20the%20reference's%20owner's%20value%0A%20%20%20%20println!(%22%7B%7D%22%2C%20bar)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/1.27.0/book/second-edition/ch15-02-deref.html"
>
	<p>
		Using <code>&mut</code> references, you can set the owner's value using the <code>*</code> operator.
	</p>

	<p>
		You can also get a copy of an owned value using the <code>*</code> operator (if the value can be
		copied - we will discuss copyable types in later chapters).
	</p>
</Lesson>
