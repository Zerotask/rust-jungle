<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={5}
	title="Multi-line String Literals"
	summary="Rust strings are multiline by default"
	tags="strings"
	previous="escaping-characters"
	next="raw-string-literals"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20haiku%3A%20%26'static%20str%20%3D%20%22%0A%20%20%20%20%20%20%20%20I%20write%2C%20erase%2C%20rewrite%0A%20%20%20%20%20%20%20%20Erase%20again%2C%20and%20then%0A%20%20%20%20%20%20%20%20A%20poppy%20blooms.%0A%20%20%20%20%20%20%20%20-%20Katsushika%20Hokusai%22%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20haiku)%3B%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20println!(%22hello%20%5C%0A%20%20%20%20world%22)%20%2F%2F%20notice%20that%20the%20spacing%20before%20world%20is%20ignored%0A%7D%0A"
>
	<p>Rust strings are multiline by default.</p>

	<p>Use a <code>\</code> at the end of a line if you don't want a line break.</p>
</Lesson>
