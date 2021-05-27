<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index="{7}"
	title="Constants"
	previous="basic-type-conversion"
	next="arrays"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=const%20PI%3A%20f32%20%3D%203.14159%3B%0A%0Afn%20main()%20%7B%0A%20%20%20%20println!(%0A%20%20%20%20%20%20%20%20%22To%20make%20an%20apple%20%7B%7D%20from%20scratch%2C%20you%20must%20first%20create%20a%20universe.%22%2C%0A%20%20%20%20%20%20%20%20PI%0A%20%20%20%20)%3B%0A%7D%0A"
>
	<p>
		Constants allow us to specify a common value that's used throughout our code many times
		efficiently. Instead of copying values like variables where they are used, constants directly
		replace the text identifier where they are used with their value at compile time.
	</p>

	<p>Unlike variables, constants must always have explicit types.</p>

	<p>Constant names are always in <i>SCREAMING_SNAKE_CASE</i>.</p>
</Lesson>
