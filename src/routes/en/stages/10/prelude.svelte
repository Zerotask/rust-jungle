<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={13}
	title="Prelude"
	previous="struct-visibility"
	next="your-own-prelude"
	furtherInformationUrls="https://doc.rust-lang.org/std/prelude/index.html"
>
	<p>
		You might be wondering how we have access to <code>Vec</code> or <code>Box</code> everywhere
		without a <code>use</code> to import them. It is because of the module <code>prelude</code> in the
		standard library.
	</p>

	<p>
		Know that in the Rust standard library anything that is exported in <code>std::prelude::*</code>
		is automatically available to every part of Rust. That is the case for <code>Vec</code> and
		<code>Box</code> but others as well (Option, Copy, etc.).
	</p>
</Lesson>
