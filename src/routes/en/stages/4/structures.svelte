<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={2}
	title="Structures"
	summary="The struct keyword allows you to create a collection of fields"
	tags="structs"
	previous="./"
	next="calling-methods"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20%2F%2F%20String%20is%20a%20struct%0A%20%20%20%20animal_type%3A%20String%2C%0A%20%20%20%20name%3A%20String%2C%0A%20%20%20%20arms%3A%20i32%2C%0A%20%20%20%20legs%3A%20i32%2C%0A%20%20%20%20weapon%3A%20String%2C%0A%7D"
	furtherInformationUrls="https://doc.rust-lang.org/std/keyword.struct.html https://doc.rust-lang.org/book/ch05-01-defining-structs.html"
>
	<p>
		A <code>struct</code> is a collection of fields.
	</p>

	<p>
		A field is simply a data value associated with a data structure. Its value can be of a primitive
		type or a data structure.
	</p>

	<p>
		Its definition is like a blueprint for a compiler on how to layout the fields in memory nearby
		each other.
	</p>
</Lesson>
