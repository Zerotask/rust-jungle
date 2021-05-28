<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/std/primitive.pointer.html'];
</script>

<Lesson
	index={3}
	title="Raw Pointers"
	previous="references-revisited"
	next="dereferencing-revisited"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%2042%3B%0A%20%20%20%20let%20memory_location%20%3D%20%26a%20as%20*const%20i32%20as%20usize%3B%0A%20%20%20%20println!(%22Data%20is%20here%20%7B%7D%22%2C%20memory_location)%3B%0A%7D%0A"
	{links}
>
	<p>
		References can be converted into a more primitive type called a raw pointer. Much like a number,
		it can be copied and moved around with little restriction. Rust makes no assurances of the
		validity of the memory location it points to.
	</p>

	<p>Two kinds of raw pointers exist:</p>
	<ul>
		<li><code>*const T</code> - A raw pointer to data of type T that should never change.</li>
		<li><code>*mut T</code> - A raw pointer to data of type T that can change.</li>
	</ul>

	<p>Raw pointers can be converted to and from numbers (e.g. <code>usize</code>).</p>

	<p>Raw pointers can access data with unsafe code (more on this later).</p>

	<p>Memory details:</p>
	<ul>
		<li>
			A reference in Rust is very similar to a pointer in C in terms of usage, but with much more
			compile time restrictions on how it can be stored and moved around to other functions.
		</li>
		<li>
			A raw pointer in Rust is similar to a pointer in C that it represents a number that can be
			copied or passed around, and even turned into numerical types where it can be modifed as a
			number to do pointer math.
		</li>
	</ul>
</Lesson>
