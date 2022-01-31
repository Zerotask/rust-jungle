<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={3}
	title="loop"
	summary="the loop keyword is a useful tool if you need an infinite loop"
	tags="iteration control-structures"
	previous="if-else"
	next="returning-values-from-loop"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20x%20%3D%200%3B%0A%20%20%20%20loop%20%7B%0A%20%20%20%20%20%20%20%20x%20%2B%3D%201%3B%0A%20%20%20%20%20%20%20%20if%20x%20%3D%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%7D%0A"
>
	<p>Need an infinite loop? Rust makes it easy.</p>

	<p><code>break</code> will escape a loop when you are ready.</p>

	<p><code>loop</code> has a secret we'll talk about soon.</p>
</Lesson>
