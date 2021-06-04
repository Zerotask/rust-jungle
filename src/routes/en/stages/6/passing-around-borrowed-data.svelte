<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={10}
	title="Passing Around Borrowed Data"
	tags="ownership memory"
	previous="dereferencing"
	next="references-of-references"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20do_something(f%3A%20%26mut%20Foo)%20%7B%0A%20%20%20%20f.x%20%2B%3D%201%3B%0A%20%20%20%20%2F%2F%20mutable%20reference%20f%20is%20dropped%20here%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20mut%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20do_something(%26mut%20foo)%3B%0A%20%20%20%20%2F%2F%20because%20all%20mutable%20references%20are%20dropped%20within%0A%20%20%20%20%2F%2F%20the%20function%20do_something%2C%20we%20can%20create%20another.%0A%20%20%20%20do_something(%26mut%20foo)%3B%0A%20%20%20%20%2F%2F%20foo%20is%20dropped%20here%0A%7D%0A"
>
	<p>Rust's rules for references might best be summarized by:</p>
	<ul>
		<li>
			Rust only allows there to be one mutable reference or multiple non-mutable references but not
			both.
		</li>
		<li>A reference must never live longer than its owner.</li>
	</ul>

	<p>This doesn't tend to be a problem when passing around references to functions.</p>

	<p>Memory details:</p>
	<ul>
		<li>
			The first rule of references prevents data races. What's a data race? A data race when reading
			from data has the possibility of being out of sync due to the existence of a writer to the
			data at the same time. This happens often in multi-threaded programming.
		</li>
		<li>
			The second rule of references prevents the misuse of references that refer to non-existent
			data (called dangling pointers in C).
		</li>
	</ul>
</Lesson>
