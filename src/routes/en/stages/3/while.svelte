<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/std/keyword.while.html'];
</script>

<Lesson
	index={5}
	title="while"
	previous="returning-values-from-loop"
	next="for"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20x%20%3D%200%3B%0A%20%20%20%20while%20x%20!%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20x%20%2B%3D%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20println!(%22x%20is%20%7B%7D%22%2C%20x)%3B%0A%7D%0A"
	{links}
>
	<p><code>while</code> lets you easily add a condition to a loop.</p>

	<p>If the condition evaluates to <code>false</code>, the loop will exit.</p>

	<p>
		Like the <code>for</code> expression, we can also use <code>break</code> to leave it or
		<code>continue</code> to skip the current iteration and start with the next iteration.
	</p>
</Lesson>
