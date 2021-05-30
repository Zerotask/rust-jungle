<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson
	index={14}
	title="Static Lifetimes"
	previous="multiple-lifetimes"
	next="lifetimes-in-data-types"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=static%20PI%3A%20f64%20%3D%203.1415%3B%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20static%20variables%20can%20also%20be%20scoped%20to%20a%20function%0A%20%20%20%20static%20mut%20SECRET%3A%20%26'static%20str%20%3D%20%22swordfish%22%3B%0A%0A%20%20%20%20%2F%2F%20string%20literals%20have%20a%20'static%20lifetime%0A%20%20%20%20let%20msg%3A%20%26'static%20str%20%3D%20%22Hello%20World!%22%3B%0A%20%20%20%20let%20p%3A%20%26'static%20f64%20%3D%20%26PI%3B%0A%20%20%20%20println!(%22%7B%7D%20%7B%7D%22%2C%20msg%2C%20p)%3B%0A%0A%20%20%20%20%2F%2F%20You%20can%20break%20some%20rules%2C%20but%20you%20must%20be%20explicit%0A%20%20%20%20unsafe%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20we%20can%20set%20SECRET%20to%20a%20string%20literal%20because%20it%20is%20also%20%60static%0A%20%20%20%20%20%20%20%20SECRET%20%3D%20%22abracadabra%22%3B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20SECRET)%3B%0A%20%20%20%20%7D%0A%7D%0A"
	links="https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html"
>
	<p>
		A static variable is a memory resource created at compile-time that exists through a program
		start to finish. They must have their types explicitly specified.
	</p>

	<p>
		A static lifetime is a memory resource that lasts indefinitely to the end of a program. Note
		that by this definition some static lifetime resources can be created at runtime.
	</p>

	<p>Resources with static lifetimes have a special lifetime specifier <code>'static</code>.</p>

	<p><code>'static</code> resources will never drop.</p>

	<p>
		If static lifetime resources contain references they must all be <code>'static</code> (anything less
		would not live long enough).
	</p>

	<p>Memory details:</p>
	<ul>
		<li>
			Modifying static variables is inherently dangerous because they are globally accessable to be
			read from by anyone introducing the possibility of a data race. We'll talk about the
			challenges of global data later.
		</li>
		<li>
			Rust allows the use of <code>unsafe {'{'} ... {'}'}</code> blocks to perform some operations
			that the compiler cannot make memory guarantees about. The <ExternalLink
				href="https://doc.rust-lang.org/nomicon/">Rustnomicon</ExternalLink
			> (aka <i>The Dark Arts of Unsafe Rust</i>) should not be talked about casually - it's like
			the restricted section from Harry Potter.
		</li>
	</ul>
</Lesson>
