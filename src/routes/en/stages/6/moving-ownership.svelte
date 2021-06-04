<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={5}
	title="Moving Ownership"
	summary="When an owner is passed as an argument to a function, ownership is moved to the function parameter"
	tags="ownership"
	previous="dropping-is-hierarchical"
	next="returning-ownership"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20do_something(f%3A%20Foo)%20%7B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20f.x)%3B%0A%20%20%20%20%2F%2F%20f%20is%20dropped%20here%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20%2F%2F%20foo%20is%20moved%20to%20do_something%0A%20%20%20%20do_something(foo)%3B%0A%20%20%20%20%2F%2F%20foo%20can%20no%20longer%20be%20used%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/scope/move.html"
>
	<p>
		When an owner is passed as an argument to a function, ownership is moved to the function
		parameter.
	</p>

	<p>After a move the variable in the original function can no longer be used.</p>

	<p>Memory details:</p>
	<ul>
		<li>
			During a move the stack memory of the owners value is copied to the function call's parameter
			stack memory.
		</li>
	</ul>
</Lesson>
