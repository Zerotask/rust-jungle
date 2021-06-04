<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={6}
	title="for"
	summary="Rust provides with for a known concept for iterating data"
	tags="iteration control-flow"
	previous="while"
	next="match"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20for%20x%20in%200..5%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20for%20x%20in%200..%3D5%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%20%20%20%20%7D%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/flow_control/for.html https://doc.rust-lang.org/std/keyword.for.html"
>
	<p>
		Rust's <code>for</code> loop is a powerful upgrade. It iterates over values from any expression that
		evaluates into an iterator. What's an iterator? An iterator is an object that you can ask the question
		"What's the next item you have?" until there are no more items.
	</p>

	<p>
		We'll explore this more in a future chapter. In the meantime, just know Rust makes it easy to
		create iterators that generate a sequence of integer numbers.
	</p>

	<p>
		The <code>..</code> operator creates an iterator that generates numbers from a start number up to
		but not including an end number.
	</p>

	<p>
		The <code>..=</code> operator creates an iterator that generates numbers from a start number up to
		and including an end number.
	</p>
</Lesson>
