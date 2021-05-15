<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 3.5: while"
	previous="returning-values-from-loop"
	next="for"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20x%20%3D%200%3B%0A%20%20%20%20while%20x%20!%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20x%20%2B%3D%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20println!(%22x%20is%20%7B%7D%22%2C%20x)%3B%0A%7D%0A"
>
	<p><code>while</code> lets you easily add a condition to a loop.</p>

	<p>If the condition evaluates to <code>false</code>, the loop will exit.</p>
</Lesson>
