<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={2}
	title="What Is Object Oriented Programming (OOP)?"
	summary="Object oriented programming roughly refers to programming languages that have a number of iconic features: encapsulation, abstraction, polymorphism and inheritance"
	previous="./"
	next="rust-is-not-oop"
>
	<p>
		Object oriented programming roughly refers to programming languages that have a number of iconic
		features:
	</p>
	<ul>
		<li>
			<i>Encapsulation</i> - Associating data and functions into the conceptual unit of a single type
			called an object.
		</li>
		<li>
			<i>Abstraction</i> - Hiding data and function members to obfuscate implementation details of an
			object.
		</li>
		<li>
			<i>Polymorphism</i> - The ability to interact with objects of different types through one interface.
		</li>
		<li><i>Inheritance</i> - The ability to inherit data and behavior from other objects.</li>
	</ul>
</Lesson>
