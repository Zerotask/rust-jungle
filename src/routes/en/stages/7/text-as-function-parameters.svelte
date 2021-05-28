<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={11}
	title="Text As Function Parameters"
	previous="string"
	next="building-strings"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20say_it_loud(msg%3A%26str)%7B%0A%20%20%20%20println!(%22%7B%7D!!!%22%2Cmsg.to_string().to_uppercase())%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20say_it_loud%20can%20borrow%20%26'static%20str%20as%20a%20%26str%0A%20%20%20%20say_it_loud(%22hello%22)%3B%0A%20%20%20%20%2F%2F%20say_it_loud%20can%20also%20borrow%20String%20as%20a%20%26str%0A%20%20%20%20say_it_loud(%26String%3A%3Afrom(%22goodbye%22))%3B%0A%7D%0A"
>
	<p>
		String literals and strings are generally passed around as a string slice to functions. This
		offers a lot of flexibility for most scenarios where you don't actually have to pass ownership.
	</p>
</Lesson>
