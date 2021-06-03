<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={8}
	title="Borrowing Mutable Ownership With References"
	previous="borrowing-ownership-with-references"
	next="dereferencing"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20do_something(f%3A%20Foo)%20%7B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20f.x)%3B%0A%20%20%20%20%2F%2F%20f%20is%20dropped%20here%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20mut%20foo%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20let%20f%20%3D%20%26mut%20foo%3B%0A%0A%20%20%20%20%2F%2F%20FAILURE%3A%20do_something(foo)%20would%20fail%20because%0A%20%20%20%20%2F%2F%20foo%20cannot%20be%20moved%20while%20mutably%20borrowed%0A%0A%20%20%20%20%2F%2F%20FAILURE%3A%20foo.x%20%3D%2013%3B%20would%20fail%20here%20because%0A%20%20%20%20%2F%2F%20foo%20is%20not%20modifiable%20while%20mutably%20borrowed%0A%0A%20%20%20%20f.x%20%3D%2013%3B%0A%20%20%20%20%2F%2F%20f%20is%20dropped%20here%20because%20it's%20no%20longer%20used%20after%20this%20point%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo.x)%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20this%20works%20now%20because%20all%20mutable%20references%20were%20dropped%0A%20%20%20%20foo.x%20%3D%207%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20move%20foo's%20ownership%20to%20a%20function%0A%20%20%20%20do_something(foo)%3B%0A%7D%0A"
>
	<p>
		We can also borrow mutable access to a resource with the <code>&mut</code> operator.
	</p>

	<p>A resource owner cannot be moved or modified while mutably borrowed.</p>

	<p>Memory details:</p>
	<ul>
		<li>
			Rust prevents having two ways to mutate an owned value because it introduces the possibility
			of a data race.
		</li>
	</ul>
</Lesson>
