<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/std/fmt/'];
</script>

<Lesson
	index={13}
	title="Formatting Strings"
	previous="building-strings"
	next="converting-strings"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%2042%3B%0A%20%20%20%20let%20names%20%3D%20%5B%22John%22%2C%20%22Doe%22%5D%3B%0A%20%20%20%20println!(%22Names%3A%20%7B%3A%3F%7D%22%2C%20names)%3B%0A%20%20%20%20println!(%22Names%20pretty-print%3A%20%7B%3A%23%3F%7D%22%2C%20names)%3B%0A%20%20%20%20let%20f%20%3D%20format!(%22secret%20to%20life%3A%20%7B%7D%22%2Ca)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2Cf)%3B%0A%7D%0A"
	{links}
>
	<p>
		The <code>format!</code> macro allows us to create a string by defining a parameterized string
		with placeholders for where and how values should be placed, e. g. <code>{'{}'}</code>).
	</p>

	<p><code>format!</code> uses the same parameterized strings as <code>println!</code></p>

	<p>
		To print arrays, structs, enums etc. you simple add <code>:?</code> to the curly brackets, e. g.
		<code>{'{:?}'}</code>
	</p>

	<p>
		You can also use a pretty-print by adding <code>:#?</code> to the curly brackets, e. g.
		<code>{'{:#?}'}</code>
	</p>
</Lesson>
