<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/rust-by-example/flow_control/if_let.html',
		'https://doc.rust-lang.org/rust-by-example/flow_control/while_let.html'
	];
</script>

<Lesson
	title="Stage 3.8: Returning Values From Block Expressions"
	previous="match"
	next="summary"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20example()%20-%3E%20i32%20%7B%0A%20%20%20%20let%20x%20%3D%2042%3B%0A%20%20%20%20%2F%2F%20Rust's%20ternary%20expression%0A%20%20%20%20let%20v%20%3D%20if%20x%20%3C%2042%20%7B%20-1%20%7D%20else%20%7B%201%20%7D%3B%0A%20%20%20%20println!(%22from%20if%3A%20%7B%7D%22%2C%20v)%3B%0A%0A%20%20%20%20let%20food%20%3D%20%22hamburger%22%3B%0A%20%20%20%20let%20result%20%3D%20match%20food%20%7B%0A%20%20%20%20%20%20%20%20%22hotdog%22%20%3D%3E%20%22is%20hotdog%22%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20notice%20the%20braces%20are%20optional%20when%20its%20just%20a%20single%20return%20expression%0A%20%20%20%20%20%20%20%20_%20%3D%3E%20%22is%20not%20hotdog%22%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22identifying%20food%3A%20%7B%7D%22%2C%20result)%3B%0A%0A%20%20%20%20let%20v%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20This%20scope%20block%20lets%20us%20get%20a%20result%20without%20polluting%20function%20scope%0A%20%20%20%20%20%20%20%20let%20a%20%3D%201%3B%0A%20%20%20%20%20%20%20%20let%20b%20%3D%202%3B%0A%20%20%20%20%20%20%20%20a%20%2B%20b%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22from%20block%3A%20%7B%7D%22%2C%20v)%3B%0A%0A%20%20%20%20%2F%2F%20The%20idiomatic%20way%20to%20return%20a%20value%20in%20rust%20from%20a%20function%20at%20the%20end%0A%20%20%20%20v%20%2B%204%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20println!(%22from%20function%3A%20%7B%7D%22%2C%20example())%3B%0A%7D%0A"
	{links}
>
	<p>
		<code>if</code>, <code>match</code>, functions, and scope blocks all have a unique way of
		returning values in Rust.
	</p>

	<p>
		If the last statement in an <code>if</code>, <code>match</code>, function, or scope block is an
		expression without a <code>;</code>, Rust will return it as a value from the block. This is a
		great way to create concise logic that returns a value that can be put into a new variable.
	</p>

	<p>
		Notice that it also allows an <code>if</code> statement to operate like a concise ternary expression.
	</p>
</Lesson>
