<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={9}
	title="Chars"
	summary="Rust offers a way to retrieve a sequence of utf-8 bytes as a vector of characters of type char"
	tags="data-types"
	previous="string-slice"
	next="string"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2F%20collect%20the%20characters%20as%20a%20vector%20of%20char%0A%20%20%20%20let%20chars%20%3D%20%22hi%20%F0%9F%A6%80%22.chars().collect%3A%3A%3CVec%3Cchar%3E%3E()%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20chars.len())%3B%20%2F%2F%20should%20be%204%0A%20%20%20%20%2F%2F%20since%20chars%20are%204%20bytes%20we%20can%20convert%20to%20u32%0A%20%20%20%20println!(%22%7B%7D%22%2C%20chars%5B3%5D%20as%20u32)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/std/str/struct.Chars.html https://doc.rust-lang.org/std/primitive.char.html"
>
	<p>
		With so much difficulty in working with Unicode, Rust offers a way to retrieve a sequence of
		utf-8 bytes as a vector of characters of type <code>char</code>.
	</p>
	<p>
		A <code>char</code> is always 4 bytes long (allowing for efficient lookup of individual characters).
	</p>
</Lesson>
