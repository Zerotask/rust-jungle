<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={2}
	title="String Literals"
	summary="String literals are always Unicode"
	tags="strings"
	previous="./"
	next="what-is-utf-8"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26'static%20str%20%3D%20%22hi%20%F0%9F%A6%80%22%3B%0A%20%20%20%20println!(%22%7B%7D%20%7B%7D%22%2C%20a%2C%20a.len())%3B%0A%7D%0A"
>
	<p>String literals are always Unicode.</p>

	<p>String literals type are <code>&'static str</code>:</p>
	<ul>
		<li>
			<code>&</code> meaning that it's referring to a place in memory, and it lacks a
			<code>&mut</code> meaning that the compiler will not allow modification
		</li>
		<li>
			<code>'static</code> meaning the string data will be available till the end of our program (it
			never drops)
		</li>
		<li>
			<code>str</code> means that it points to a sequence of bytes that are always valid utf-8
		</li>
	</ul>

	<p>Memory details:</p>
	<ul>
		<li>
			The Rust compiler will likely put your string in the data segment of your program memory
		</li>
	</ul>
</Lesson>
