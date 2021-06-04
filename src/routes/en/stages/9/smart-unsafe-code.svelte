<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={8}
	title="Smart Unsafe Code"
	previous="smart-pointers"
	next="familiar-friends"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%5Bu8%3B%204%5D%20%3D%20%5B86%2C%2014%2C%2073%2C%2064%5D%3B%0A%20%20%20%20%2F%2F%20this%20is%20a%20raw%20pointer.%20Getting%20the%20memory%20address%0A%20%20%20%20%2F%2F%20of%20something%20as%20a%20number%20is%20totally%20safe%0A%20%20%20%20let%20pointer_a%20%3D%20%26a%20as%20*const%20u8%20as%20usize%3B%0A%20%20%20%20println!(%22Data%20memory%20location%3A%20%7B%7D%22%2C%20pointer_a)%3B%0A%20%20%20%20%2F%2F%20Turning%20our%20number%20into%20a%20raw%20pointer%20to%20a%20f32%20is%0A%20%20%20%20%2F%2F%20also%20safe%20to%20do.%0A%20%20%20%20let%20pointer_b%20%3D%20pointer_a%20as%20*const%20f32%3B%0A%20%20%20%20let%20b%20%3D%20unsafe%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20This%20is%20unsafe%20because%20we%20are%20telling%20the%20compiler%0A%20%20%20%20%20%20%20%20%2F%2F%20to%20assume%20our%20pointer%20is%20a%20valid%20f32%20and%0A%20%20%20%20%20%20%20%20%2F%2F%20dereference%20it's%20value%20into%20the%20variable%20b.%0A%20%20%20%20%20%20%20%20%2F%2F%20Rust%20has%20no%20way%20to%20verify%20this%20assumption%20is%20true.%0A%20%20%20%20%20%20%20%20*pointer_b%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22I%20swear%20this%20is%20a%20pie!%20%7B%7D%22%2C%20b)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html https://doc.rust-lang.org/std/keyword.unsafe.html"
>
	<p>
		Smart pointers tend to use unsafe code fairly often. As mentioned earlier, they are common tools
		for interacting with the lowest levels of memory in Rust.
	</p>

	<p>
		What is unsafe code? Unsafe code behaves exactly like normal Rust with the exception of a few
		abilities that the Rust compiler is unable to make guarantees about.
	</p>

	<p>
		A primary ability of unsafe code is dereferencing a raw pointer. That means taking a raw pointer
		to a position in memory and declaring "a data structure exists here!" and turning it into a
		representation of data you can use (i.e. <code>*const u8</code> into <code>u8</code>). Rust has
		no way to keep track of the meaning of every byte that gets written to memory. Because Rust
		can't make guarantees about what exists at an arbitrary number used as a raw pointer, it puts
		the dereference in an <code>unsafe {'{ ... }'}</code> block.
	</p>

	<p>
		Smart pointers dereference raw pointers extensively, but they are well proven in what they do.
	</p>
</Lesson>
