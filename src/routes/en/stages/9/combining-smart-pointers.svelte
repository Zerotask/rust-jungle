<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={15}
	title="Combining Smart Pointers"
	previous="sharing-across-threads"
	next="summary"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Acell%3A%3ARefCell%3B%0Ause%20std%3A%3Arc%3A%3ARc%3B%0A%0Astruct%20Pie%20%7B%0A%20%20%20%20slices%3A%20u8%2C%0A%7D%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20eat_slice(%26mut%20self%2C%20name%3A%20%26str)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%20took%20a%20slice!%22%2C%20name)%3B%0A%20%20%20%20%20%20%20%20self.slices%20-%3D%201%3B%0A%20%20%20%20%7D%0A%7D%0A%0Astruct%20SeaCreature%20%7B%0A%20%20%20%20name%3A%20String%2C%0A%20%20%20%20pie%3A%20Rc%3CRefCell%3CPie%3E%3E%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20fn%20eat(%26self)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20use%20smart%20pointer%20to%20pie%20for%20a%20mutable%20borrow%0A%20%20%20%20%20%20%20%20let%20mut%20p%20%3D%20self.pie.borrow_mut()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20take%20a%20bite!%0A%20%20%20%20%20%20%20%20p.eat_slice(%26self.name)%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20pie%20%3D%20Rc%3A%3Anew(RefCell%3A%3Anew(Pie%20%7B%20slices%3A%208%20%7D))%3B%0A%20%20%20%20%2F%2F%20ferris%20and%20sarah%20are%20given%20clones%20of%20smart%20pointer%20to%20pie%0A%20%20%20%20let%20ferris%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22ferris%22)%2C%0A%20%20%20%20%20%20%20%20pie%3A%20pie.clone()%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20let%20sarah%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22sarah%22)%2C%0A%20%20%20%20%20%20%20%20pie%3A%20pie.clone()%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20ferris.eat()%3B%0A%20%20%20%20sarah.eat()%3B%0A%0A%20%20%20%20let%20p%20%3D%20pie.borrow()%3B%0A%20%20%20%20println!(%22%7B%7D%20slices%20left%22%2C%20p.slices)%3B%0A%7D%0A"
>
	<p>Smart pointers might seem limited, but they can make some very powerful combinations.</p>

	<p>
		<code>{'Rc<Vec<Foo>> '}</code> - Allow the cloning of multiple smart pointers that can borrow the
		same vector of immutable data structures on the heap.
	</p>

	<p>
		<code>{'Rc<RefCell<Foo>>'}</code> - Allow multiple smart pointers the ability to borrow
		mutably/immutably the same struct <code>Foo</code>
	</p>

	<p>
		<code>{'Arc<Mutex<Foo>>'}</code> - Allow multiple smart pointers the ability to lock temporary mutable/immutable
		borrows in a CPU thread exclusive manner.
	</p>

	<p>Memory details:</p>
	<ul>
		<li>
			You'll notice a theme with many of these combinations. The use of a immutable data type
			(possibly owned by multiple smart pointers) to modify internal data. This is referred to as
			the "interior mutability" pattern in Rust. It is a pattern that lets us bend the rules of
			memory usage at runtime with the same level of safety as Rust's compile-time checks.
		</li>
	</ul>
</Lesson>
