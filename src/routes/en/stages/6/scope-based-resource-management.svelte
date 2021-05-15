<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson
	title="Stage 6.3: Scope-based Resource Management"
	previous="ownership"
	next="dropping-is-hierarchical"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20x%3A%20i32%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo_a%20%3D%20Foo%20%7B%20x%3A%2042%20%7D%3B%0A%20%20%20%20let%20foo_b%20%3D%20Foo%20%7B%20x%3A%2013%20%7D%3B%0A%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo_a.x)%3B%0A%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo_b.x)%3B%0A%20%20%20%20%2F%2F%20foo_b%20is%20dropped%20here%20%0A%20%20%20%20%2F%2F%20foo_a%20is%20dropped%20here%0A%7D%0A"
>
	<p>Rust uses the end of scope as the place to deconstruct and deallocate a resource.</p>

	<p>The term for this deconstruction and deallocation is called a drop.</p>

	<p>Memory details:</p>
	<ul>
		<li>Rust does not have garbage collection.</li>
		<li>
			This is also called <ExternalLink
				href="https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization"
				>Resource Aquisition Is Initialization ( RAII )</ExternalLink
			> in C++.
		</li>
	</ul>
</Lesson>
