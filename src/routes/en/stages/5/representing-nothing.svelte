<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={3}
	title="Representing Nothing"
	summary="Rust has no null data type as other programming languages"
	tags="enums"
	previous="what-are-generic-types"
	next="option"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=enum%20Item%20%7B%0A%20%20%20%20Inventory(String)%2C%0A%20%20%20%20%2F%2F%20None%20represents%20the%20absence%20of%20an%20item%0A%20%20%20%20None%2C%0A%7D%0A%0Astruct%20BagOfHolding%20%7B%0A%20%20%20%20item%3A%20Item%2C%0A%7D%0A"
>
	<p>
		In other languages, the keyword <code>null</code> is used to represent an absence of a value. It
		creates difficulty in programming languages because it creates the possibility that our program might
		fail when interacting with a variable/field.
	</p>

	<p>
		Rust does not have <code>null</code>, but it is not ignorant of the importance of representing
		nothing! Consider a naive representation using a tool we already know.
	</p>

	<p>
		This pattern of providing a <code>None</code> alternative representation for one or many
		alternate values is so common in Rust because of its lack of a <code>null</code> value. Generic types
		help solve this challenge.
	</p>
</Lesson>
