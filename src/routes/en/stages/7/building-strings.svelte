<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index="12"
	title="Building Strings"
	previous="text-as-function-parameters"
	next="formatting-strings"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20helloworld%20%3D%20%5B%22hello%22%2C%20%22%20%22%2C%20%22world%22%2C%20%22!%22%5D.concat()%3B%0A%20%20%20%20let%20abc%20%3D%20%5B%22a%22%2C%20%22b%22%2C%20%22c%22%5D.join(%22%2C%22)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20helloworld)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2Cabc)%3B%0A%7D%0A"
>
	<p>
		<code>concat</code> and <code>join</code> are two simple but powerful ways for building strings.
	</p>
</Lesson>
