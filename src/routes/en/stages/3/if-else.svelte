<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={2}
	title="if / else"
	previous="./"
	next="loop"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20x%20%3D%2042%3B%0A%20%20%20%20if%20x%20%3C%2042%20%7B%0A%20%20%20%20%20%20%20%20println!(%22less%20than%2042%22)%3B%0A%20%20%20%20%7D%20else%20if%20x%20%3D%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20println!(%22is%2042%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20println!(%22greater%20than%2042%22)%3B%0A%20%20%20%20%7D%0A%7D"
	links="https://doc.rust-lang.org/rust-by-example/flow_control/if_else.html"
>
	<p>
		In this chapter let's talk about basic control flow methods in Rust. If you are familiar with C
		based languages you'll feel right at home and maybe enjoy a surprise or two.
	</p>

	<p>
		Conditions don't have parentheses! Did we ever really need them? Our logic now looks nice and
		clean.
	</p>

	<p>
		All your usual relational and logical operators still work: <code>==</code>, <code>!=</code>,
		<code>{'<'}</code>, <code>{'>'}</code>,
		<code>{'<='}</code>, <code>{'>='}</code>, <code>!</code>, <code>||</code>, <code>&&</code>.
	</p>
</Lesson>
