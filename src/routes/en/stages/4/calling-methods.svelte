<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={3}
	title="Calling Methods"
	description="Methods are similar to functions, but associated with a struct"
	tags="structs"
	previous="structures"
	next="memory"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2F%20Using%20a%20static%20method%20to%20create%20an%20instance%20of%20String%0A%20%20%20%20let%20s%20%3D%20String%3A%3Afrom(%22Hello%20world!%22)%3B%0A%20%20%20%20%2F%2F%20Using%20a%20method%20on%20the%20instance%0A%20%20%20%20println!(%22%7B%7D%20is%20%7B%7D%20characters%20long.%22%2C%20s%2C%20s.len())%3B%0A%7D%0A"
>
	<p>Unlike functions, methods are functions associated with a specific data type:</p>
	<ul>
		<li>static methods — methods that belong to a type itself are called using the :: operator.</li>
		<li>
			instance methods — methods that belong to an instance of a type are called using the .
			operator.
		</li>
	</ul>

	<p>We will talk more on making your own methods in future chapters.</p>
</Lesson>
