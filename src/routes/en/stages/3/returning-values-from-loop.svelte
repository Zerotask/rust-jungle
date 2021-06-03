<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={4}
	title="Returning Values From Loop"
	previous="loop"
	next="while"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20x%20%3D%200%3B%0A%20%20%20%20let%20v%20%3D%20loop%20%7B%0A%20%20%20%20%20%20%20%20x%20%2B%3D%201%3B%0A%20%20%20%20%20%20%20%20if%20x%20%3D%3D%2013%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20break%20%22found%20the%2013%22%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22from%20loop%3A%20%7B%7D%22%2C%20v)%3B%0A%7D%0A"
	tags="iteration"
>
	<p>
		<code>loop</code> can break to return a value. This is used to assign a value to a variable.
	</p>
</Lesson>
