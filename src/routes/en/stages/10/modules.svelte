<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={2}
	title="Modules"
	previous="./"
	next="writing-a-program"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch07-01-packages-and-crates.html https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html"
>
	<p>
		Every Rust program or library is a <i>crate</i>.
	</p>

	<p>Every crate is made of a hierarchy of <i>modules</i>.</p>

	<p>Every crate has a <i>root module</i>.</p>

	<p>A module can hold global variables, functions, structs, traits or even other modules!</p>

	<p>
		In Rust there is not a 1 to 1 mapping of files to the module tree hierarchy. We must build the
		module tree explicitly by hand in our code.
	</p>
</Lesson>
