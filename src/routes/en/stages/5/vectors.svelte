<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/std/vec/struct.Vec.html',
		'https://doc.rust-lang.org/stable/rust-by-example/std/vec.html'
	];
</script>

<Lesson
	index="9"
	title="Vectors"
	previous="ugly-option-result-handling"
	next="summary"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2F%20We%20can%20be%20explicit%20with%20type%0A%20%20%20%20let%20mut%20i32_vec%20%3D%20Vec%3A%3A%3Ci32%3E%3A%3Anew()%3B%20%2F%2F%20turbofish%20%3C3%0A%20%20%20%20i32_vec.push(1)%3B%0A%20%20%20%20i32_vec.push(2)%3B%0A%20%20%20%20i32_vec.push(3)%3B%0A%0A%20%20%20%20%2F%2F%20But%20look%20how%20clever%20Rust%20is%20about%20determining%20the%20type%20automatically%0A%20%20%20%20let%20mut%20float_vec%20%3D%20Vec%3A%3Anew()%3B%0A%20%20%20%20float_vec.push(1.3)%3B%0A%20%20%20%20float_vec.push(2.3)%3B%0A%20%20%20%20float_vec.push(3.4)%3B%0A%0A%20%20%20%20%2F%2F%20That's%20a%20beautiful%20macro!%0A%20%20%20%20let%20string_vec%20%3D%20vec!%5BString%3A%3Afrom(%22Hello%22)%2C%20String%3A%3Afrom(%22World%22)%5D%3B%0A%0A%20%20%20%20for%20word%20in%20string_vec.iter()%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20word)%3B%0A%20%20%20%20%7D%0A%7D%0A"
	{links}
>
	<p>
		Some of the most useful generic types are collection types. A vector is a variably sized list of
		items represented by the struct <code>Vec</code>.
	</p>

	<p>
		The macro <code>vec!</code> lets us easily create a vector rather than manually constructing one.
	</p>

	<p>
		<code>Vec</code> has the method <code>iter()</code> which creates an iterator from a vector,
		allowing us to easily put a vector into a <code>for</code> loop.
	</p>

	<p>Memory Details:</p>
	<ul>
		<li>
			<code>Vec</code> is a struct, but internally it contains a reference to a fixed list of its items
			on the heap.
		</li>
		<li>
			A vector starts with a default capacity; when more items are added than it has capacity for,
			it reallocates its data on the heap to have a new fixed list with large capacity.
		</li>
	</ul>
</Lesson>
