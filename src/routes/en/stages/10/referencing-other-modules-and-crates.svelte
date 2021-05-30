<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson
	index={5}
	title="Referencing Other Modules And Crates"
	previous="writing-a-library"
	next="referencing-multiple-items"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Af64%3A%3Aconsts%3A%3API%3B%0A%0Afn%20main()%20%7B%0A%20%20%20%20println!(%22Welcome%20to%20the%20playground!%22)%3B%0A%20%20%20%20println!(%22I%20would%20love%20a%20slice%20of%20%7B%7D!%22%2C%20PI)%3B%0A%7D%0A"
	links="https://doc.rust-lang.org/rust-by-example/mod/use.html"
>
	<p>
		Items in modules can be referenced with their full module path <code>std::f64::consts::PI</code
		>.
	</p>

	<p>
		A simpler way is the <code>use</code> keyword. It allows us to specify particular items from
		modules we want to use throughout our code without a full path. For instance use
		<code>std::f64::consts::PI</code> allows me to just use the identifier <code>PI</code> in my main
		function.
	</p>

	<p>
		<code>std</code> is the crate of the <i>standard library of Rust</i> which is full of useful data
		structures and functions for interacting with your operating system.
	</p>

	<p>
		A searchable directory of crates created by the community can be found at <ExternalLink
			href="https://crates.io"
		/>.
	</p>
</Lesson>
