<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={4}
	title="Escaping Characters"
	summary="Rust supports the common escape codes from C-based languages"
	previous="what-is-utf-8"
	next="multi-line-string-literals"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26'static%20str%20%3D%20%22Ferris%20says%3A%5Ct%5C%22hello%5C%22%22%3B%0A%20%20%20%20println!(%22%7B%7D%22%2Ca)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/reference/tokens.html#characters-and-strings"
>
	<p>
		It's challenging to visually represent certain characters, so escape codes allow us to put a
		symbol in their place.
	</p>

	<p>Rust supports the common escape codes from C-based languages:</p>
	<ul>
		<li><code>\n</code> - newline</li>
		<li><code>\r</code> - carriage return</li>
		<li><code>\t</code> - tab</li>
		<li><code>\\</code> - backslash</li>
		<li><code>\0</code> - null</li>
		<li><code>\'</code> - single quote</li>
	</ul>
</Lesson>
