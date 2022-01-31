<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={10}
	title="String"
	summary="A String is a struct that owns a sequence of utf-8 bytes in heap memory."
	tags="strings"
	previous="chars"
	next="text-as-function-parameters"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20helloworld%20%3D%20String%3A%3Afrom(%22hello%22)%3B%0A%20%20%20%20helloworld.push_str(%22%20world%22)%3B%0A%20%20%20%20helloworld%20%3D%20helloworld%20%2B%20%22!%22%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20helloworld)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/std/string/struct.String.html https://doc.rust-lang.org/rust-by-example/std/str.html"
>
	<p>A String is a struct that owns a sequence of utf-8 bytes in heap memory.</p>

	<p>
		Because its memory is on the heap, it can be extended, modified, etc. in ways string literals
		cannot.
	</p>

	<p>Common methods are:</p>

	<ul>
		<li><code>push_str</code> to add more utf-8 bytes to the end of a string.</li>
		<li><code>replace</code> to replace sequences of utf-8 bytes with others.</li>
		<li><code>to_lowercase</code> / <code>to_uppercase</code> for case changes.</li>
		<li><code>trim</code> for trimming space</li>
	</ul>

	<p>When a String is dropped, its heap memory is also dropped.</p>

	<p>
		<code>String</code> has a <code>+</code> operator that extends the string with a
		<code>&str</code> and returns itself, but it might not be as ergonomic as you hope for.
	</p>
</Lesson>
