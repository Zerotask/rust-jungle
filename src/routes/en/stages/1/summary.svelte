<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 1.12: Summary"
	previous="returning-nothing"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20make_nothing()%20-%3E%20()%20%7B%0A%20%20%20%20return%20()%3B%0A%7D%0A%0A%2F%2F%20the%20return%20type%20is%20implied%20as%20()%0Afn%20make_nothing2()%20%7B%0A%20%20%20%20%2F%2F%20this%20function%20will%20return%20()%20if%20nothing%20is%20specified%20to%20return%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%20make_nothing()%3B%0A%20%20%20%20let%20b%20%3D%20make_nothing2()%3B%0A%0A%20%20%20%20%2F%2F%20Printing%20a%20debug%20string%20for%20a%20and%20b%0A%20%20%20%20%2F%2F%20Because%20it's%20hard%20to%20print%20nothingness%0A%20%20%20%20println!(%22The%20value%20of%20a%3A%20%7B%3A%3F%7D%22%2C%20a)%3B%0A%20%20%20%20println!(%22The%20value%20of%20b%3A%20%7B%3A%3F%7D%22%2C%20b)%3B%0A%7D%0A"
>
	<p>
		Nice job so far! The basics of Rust aren't so bad, right? We're getting a peek into how the Rust
		compiler thinks. As a system programming language it cares a lot about the size of values in
		memory, whether things can be modified or not, and making sure your math is what you want it to
		be. Next up we'll be looking at some old friends: <code>if</code> tests and <code>for</code> loops.
	</p>

	<p>More Resources:</p>
	<ul>
		<li>
			<a href="https://www.youtube.com/watch?v=n5TRBkbystY" rel="external noreferrer"
				>Youtube: Rust Cast - A deeper dive on Rust's primitive number types</a
			>
		</li>
		<li>
			<a
				href="https://doc.rust-lang.org/1.30.0/book/2018-edition/ch03-02-data-types.html"
				rel="external noreferrer"
				>Website: Rust Book 2018 - A deeper description on basic data types</a
			>
		</li>
		<li>
			<a href="https://cheats.rs/#basic-types" rel="external noreferrer"
				>Website: Rust Cheat Sheet - Data Types</a
			>
		</li>
	</ul>
</Lesson>
