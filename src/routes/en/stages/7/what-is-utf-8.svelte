<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://en.wikipedia.org/wiki/UTF-8'];
</script>

<Lesson
	title="Stage 7.3: What Is UTF-8?"
	previous="string-literals"
	next="escaping-characters"
	{links}
>
	<p>
		As more languages were used on computers, the world needed to represent more text characters
		than ASCII allowed (1 byte only allowed 256 characters).
	</p>

	<p>
		utf-8 was introduced with a variable byte length of 1-4 bytes greatly increasing the range of
		possible characters.
	</p>

	<p>
		An advantage of variable sized characters is text did not have unnecessary bytes for very common
		ASCII (only requiring 1 byte still in utf-8).
	</p>

	<p>
		A downside of variable sized characters is that character lookup can no longer be done quickly
		(O(1) constant time) with a simple indexing (e.g. <code>my_text[3]</code> to get the 4th character).
		It's possible that the preceding characters could have variable widths, altering where the 4th character
		actually begins in the sequence of bytes.
	</p>

	<p>
		Instead we must iterate through a utf-8 byte sequence to understand where the Unicode characters
		actually begin (O(n) linear time).
	</p>

	<p>
		Ferris: "I'm mostly just happy to have utf-8 for representing emojis of my underwater friends."<br
		/>🐠🐙🐟🐬🐋
	</p>
</Lesson>
