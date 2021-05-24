<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index="6"
	title="Raw String Literals"
	previous="multi-line-string-literals"
	next="string-literals-from-files"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26'static%20str%20%3D%20r%23%22%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22advice%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Raw%20strings%20are%20useful%20for%20some%20situations.%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%22%23%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a)%3B%0A%7D%0A"
>
	<p>
		Raw strings allow us to write a sequence of characters verbatim by starting with <code>r#"</code
		>
		and ending with <code>"#</code>. It lets us insert characters that might otherwise confuse a
		normal string as literals (like double quotes and backslashes).
	</p>
</Lesson>
