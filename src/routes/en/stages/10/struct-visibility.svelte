<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={12}
	title="struct Visibility"
	summary="Just like functions, structures can declare what they want exposed outside of their module using pub"
	tags="structs"
	previous="exporting"
	next="prelude"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F%20SeaCreature%20struct%20will%20be%20usable%20outside%20of%20our%20module%0Apub%20struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20animal_type%3A%20String%2C%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20pub%20arms%3A%20i32%2C%0A%20%20%20%20pub%20legs%3A%20i32%2C%0A%20%20%20%20%2F%2F%20let's%20keep%20our%20weapon%20private%0A%20%20%20%20weapon%3A%20String%2C%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/mod/struct_visibility.html"
>
	<p>
		Just like functions, structures can declare what they want exposed outside of their module using <code
			>pub</code
		>.
	</p>

	<p>This is a similar defensive approach as with immutable variables by default.</p>
</Lesson>
