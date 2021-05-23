<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson index="14" title="Your Own Prelude" previous="prelude" next="cargo-toml-file">
	<p>
		Because of standard library's prelude, it's common for your libary to have its own prelude
		module as a starting point for where users should import all of the most common data structures
		for using your library (e.g use <code>my_library::prelude::*</code>). It doesn't automatically
		get used in programs/libraries that use your crate, but it's a good convention to follow so
		people know where to start.
	</p>

	<p>Ferris says, "Be a good rustacean and help a fellow crab out with a good prelude!"</p>
</Lesson>
