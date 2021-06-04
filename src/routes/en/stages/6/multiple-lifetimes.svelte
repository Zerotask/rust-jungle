<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={13}
	title="Multiple Lifetimes"
	summary="Lifetime specifiers allow us to be explicit with certain scenarios"
	tags="lifetimes"
	previous="explicit-lifetimes"
	next="static-lifetimes"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0A%2F%2F%20foo_b%20and%20the%20return%20value%20share%20the%20same%20lifetime%0A%2F%2F%20foo_a%20has%20an%20unrelated%20lifetime%0Afn%20do_something%3C'a%2C%20'b%3E(foo_a%3A%20%26'a%20Foo%2C%20foo_b%3A%20%26'b%20Foo)%20-%3E%20%26'b%20i32%20%7B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo_a.x)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo_b.x)%3B%0A%20%20%20%20return%20%26foo_b.x%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo_a%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20let%20foo_b%20%3D%20Foo%20%7B%20x%3A%2012%20%7D%3B%0A%20%20%20%20let%20x%20%3D%20do_something(%26foo_a%2C%20%26foo_b)%3B%0A%20%20%20%20%2F%2F%20foo_a%20is%20dropped%20here%20because%20only%20foo_b's%20lifetime%20exist%20beyond%20here%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%20%20%20%20%2F%2F%20x%20is%20dropped%20here%0A%20%20%20%20%2F%2F%20foo_b%20is%20dropped%20here%0A%7D%0A"
>
	<p>
		Lifetime specifiers allow us to be explicit with certain scenarios the compiler cannot resolve
		itself by distinguishing all of a function signature component's lifetimes.
	</p>
</Lesson>
