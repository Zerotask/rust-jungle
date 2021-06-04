<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={4}
	title="Changing Variables"
	summary="Rust variables are immutable by default"
	tags="variables"
	previous="variables"
	next="basic-types"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20x%20%3D%2042%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%20%20%20%20x%20%3D%2013%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%7D%0A"
>
	<p>Rust cares a great deal about what variables are modifiable. Values fall into two types:</p>
	<ul>
		<li><i>mutable</i> - the compiler will allow the variable to be written to and read from.</li>
		<li><i>immutable</i> - the compiler will only allow the variable to be read from.</li>
	</ul>

	<p>
		Mutable values are denoted with a <code>mut</code> keyword.
	</p>

	<p>
		We will have more to say on this concept later, but for now just keep an eye out for this
		keyword.
	</p>
</Lesson>
