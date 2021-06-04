<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={14}
	title="Converting Strings"
	summary="Many types can be converted to a string using to_string"
	tags="strings"
	previous="formatting-strings"
	next="useful-string-methods"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20-%3E%20Result%3C()%2C%20std%3A%3Anum%3A%3AParseIntError%3E%20%7B%0A%20%20%20%20let%20a%20%3D%2042%3B%0A%20%20%20%20let%20a_string%20%3D%20a.to_string()%3B%0A%20%20%20%20let%20b%20%3D%20a_string.parse%3A%3A%3Ci32%3E()%3F%3B%0A%20%20%20%20println!(%22%7B%7D%20%7B%7D%22%2C%20a%2C%20b)%3B%0A%20%20%20%20Ok(())%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/conversion/string.html"
>
	<p>
		Many types can be converted to a string using <code>to_string</code>.
	</p>

	<p>
		The generic function <code>parse</code> can be used to convert strings or string literals into a
		typed value. This function returns a <code>Result</code> because it could fail.
	</p>
</Lesson>
