<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={8}
	title="String Slice"
	summary="A string slice is a reference to a sequence of bytes in memory that must always be valid utf-8"
	tags="strings"
	previous="string-literals-from-files"
	next="chars"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%20%22hi%20%F0%9F%A6%80%22%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.len())%3B%0A%20%20%20%20let%20first_word%20%3D%20%26a%5B0..2%5D%3B%0A%20%20%20%20let%20second_word%20%3D%20%26a%5B3..7%5D%3B%0A%20%20%20%20%2F%2F%20let%20half_crab%20%3D%20%26a%5B3..5%5D%3B%20FAILS%0A%20%20%20%20%2F%2F%20Rust%20does%20not%20accept%20slices%20of%20invalid%20unicode%20characters%0A%20%20%20%20println!(%22%7B%7D%20%7B%7D%22%2C%20first_word%2C%20second_word)%3B%0A%20%20%20%20%0A%20%20%20%20if%20!a.is_empty()%20%7B%0A%20%20%20%20%20%20%20%20println!(%22a%20is%20not%20empty.%22)%3B%0A%20%20%20%20%7D%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch04-03-slices.html"
>
	<p>
		A string slice is a reference to a sequence of bytes in memory that must always be valid utf-8.
	</p>
	<p>
		A string slice (a sub-slice) of a <code>str</code> slice, must also be valid utf-8.
	</p>
	<p>Common methods of <code>&str</code>:</p>
	<ul>
		<li>
			<code>len</code> gets the length of the string literal in bytes (not number of characters).
		</li>
		<li><code>starts_with</code> / <code>ends_with</code> for basic testing.</li>
		<li><code>is_empty</code> returns true if zero length.</li>
		<li>
			<code>find</code> returns an <code>{'Option<usize>'}</code> of the first position of some text.
		</li>
	</ul>
</Lesson>
