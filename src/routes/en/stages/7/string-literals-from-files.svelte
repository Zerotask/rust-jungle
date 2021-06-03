<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={7}
	title="String Literals From Files"
	previous="raw-string-literals"
	next="string-slice"
	furtherInformationUrls="https://doc.rust-lang.org/std/macro.include_str.html"
>
	<p>
		If you have some very large text, consider using the macro <code>include_str!</code> to include text
		from local files in your program:
	</p>
	<p>
		<code>let hello_html = include_str!("hello.html");</code>
	</p>
</Lesson>
