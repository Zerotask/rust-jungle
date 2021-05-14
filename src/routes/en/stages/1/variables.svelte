<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 1: Variables"
	previous="the-rust-playground"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2F%20rust%20infers%20the%20type%20of%20x%0A%20%20%20%20let%20x%20%3D%2013%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%0A%20%20%20%20%2F%2F%20rust%20can%20also%20be%20explicit%20about%20the%20type%0A%20%20%20%20let%20x%3A%20f64%20%3D%203.14159%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%0A%20%20%20%20%2F%2F%20rust%20can%20also%20declare%20and%20initialize%20later%2C%20but%20this%20is%20rarely%20done%0A%20%20%20%20let%20x%3B%0A%20%20%20%20x%20%3D%200%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%7D%0A"
>
	<p>Variables are declared using the let keyword.</p>
	<p>
		When assigning a value, Rust will be able to infer the type of your variable 99% of the time. If
		it cannot you may add the type to your variable declaration.
	</p>
	<p>
		Notice how we can assign to the same variable name multiple times. This is called variable
		shadowing and the type can be changed for subsequent references to that name.
	</p>
	<p>Variable names are always in <i>snake_case</i>.</p>
</Lesson>
