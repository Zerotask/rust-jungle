<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={9}
	title="Familiar Friends"
	previous="smart-unsafe-code"
	next="heap-allocated-memory"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=use%20std%3A%3Aalloc%3A%3A%7Balloc%2C%20Layout%7D%3B%0Ause%20std%3A%3Aops%3A%3ADeref%3B%0A%0Astruct%20Pie%20%7B%0A%20%20%20%20secret_recipe%3A%20usize%2C%0A%7D%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20new()%20-%3E%20Self%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20let's%20ask%20for%204%20bytes%0A%20%20%20%20%20%20%20%20let%20layout%20%3D%20Layout%3A%3Afrom_size_align(4%2C%201).unwrap()%3B%0A%0A%20%20%20%20%20%20%20%20unsafe%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20allocate%20and%20save%20the%20memory%20location%20as%20a%20number%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20ptr%20%3D%20alloc(layout)%20as%20*mut%20u8%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20use%20pointer%20math%20and%20write%20a%20few%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20u8%20values%20to%20memory%0A%20%20%20%20%20%20%20%20%20%20%20%20ptr.write(86)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20ptr.add(1).write(14)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20ptr.add(2).write(73)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20ptr.add(3).write(64)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20Pie%20%7B%20secret_recipe%3A%20ptr%20as%20usize%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0Aimpl%20Deref%20for%20Pie%20%7B%0A%20%20%20%20type%20Target%20%3D%20f32%3B%0A%20%20%20%20fn%20deref(%26self)%20-%3E%20%26f32%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20interpret%20secret_recipe%20pointer%20as%20a%20f32%20raw%20pointer%0A%20%20%20%20%20%20%20%20let%20pointer%20%3D%20self.secret_recipe%20as%20*const%20f32%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20dereference%20it%20into%20a%20return%20value%20%26f32%0A%20%20%20%20%20%20%20%20unsafe%20%7B%20%26*pointer%20%7D%0A%20%20%20%20%7D%0A%7D%0Afn%20main()%20%7B%0A%20%20%20%20let%20p%20%3D%20Pie%3A%3Anew()%3B%0A%20%20%20%20%2F%2F%20%22make%20a%20pie%22%20by%20dereferencing%20our%20%0A%20%20%20%20%2F%2F%20Pie%20struct%20smart%20pointer%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20*p)%3B%0A%7D%0A"
>
	<p>
		Consider some smart pointers we've already seen like <code>{'Vec<T>'}</code> and
		<code>String</code>.
	</p>

	<p>
		<code>{'Vec<T>'}</code> is a smart pointer that just owns some memory region of bytes. The Rust
		compiler has no idea what exists in these bytes. The smart pointer interprets what it means to
		grab items from the region of memory it manages, keeps track of where data structures within
		those bytes begin and end, and then finally dereferences a raw pointer into data structures into
		a nice clean ergonomic interface for us to use (e.g. <code>my_vec[3]</code>).
	</p>

	<p>
		Similarly, <code>String</code> keeps track of a memory region of bytes, and programmatically
		restricts content written to it to always be valid <i>UTF-8</i> and helps dereference that
		memory region into a type <code>&str</code>.
	</p>

	<p>Both these datastructures use unsafe dereferencing of raw pointers to do their job.</p>

	<p>Memory details:</p>
	<ul>
		<li>
			Rust has an equivalent of C's <i>malloc</i> using alloc and Layout for getting ahold of your own
			memory regions to manage.
		</li>
	</ul>
</Lesson>
