<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index="7"
	title="Unit-like Structs"
	previous="tuple-like-structs"
	next="enums"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Marker%3B%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20_m%20%3D%20Marker%3B%0A%7D%0A"
>
	<p>Structs do not have to have any fields at all.</p>

	<p>
		As mentioned in Chapter 1 a unit is another word for an empty tuple <code>()</code>. This is why
		this kind of struct is called Unit-like.
	</p>

	<p>This type of struct is rarely used.</p>
</Lesson>
