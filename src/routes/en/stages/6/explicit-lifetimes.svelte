<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={12}
	title="Explicit Lifetimes"
	previous="references-of-references"
	next="multiple-lifetimes"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0A%2F%2F%20the%20parameter%20foo%20and%20return%20value%20share%20the%20same%20lifetime%0Afn%20do_something%3C'a%3E(foo%3A%20%26'a%20Foo)%20-%3E%20%26'a%20i32%20%7B%0A%20%20%20%20return%20%26foo.x%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20mut%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20let%20x%20%3D%20%26mut%20foo.x%3B%0A%20%20%20%20*x%20%3D%2013%3B%0A%20%20%20%20%2F%2F%20x%20is%20dropped%20here%2C%20allowing%20us%20to%20create%20a%20non-mutable%20reference%0A%20%20%20%20let%20y%20%3D%20do_something(%26foo)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20y)%3B%0A%20%20%20%20%2F%2F%20y%20is%20dropped%20here%0A%20%20%20%20%2F%2F%20foo%20is%20dropped%20here%0A%7D%0A"
	links="https://doc.rust-lang.org/rust-by-example/scope/lifetime/explicit.html https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
>
	<p>
		Even though Rust doesn't always show it in code, the compiler understands the lifetime of every
		variable and will attempt to validate that a reference never exists longer than its owner.
	</p>

	<p>
		Functions can be explicit by parameterizing the function signature with symbols that help
		identify which parameters and return values share the same lifetime.
	</p>

	<p>
		Lifetime specifiers always start with a <code>'</code>, e.g. <code>'a</code>, <code>'b</code>
	</p>
</Lesson>
