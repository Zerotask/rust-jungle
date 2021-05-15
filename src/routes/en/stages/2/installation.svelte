<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson title="Stage 2.2: Installation" previous="./" next="rustup">
	<p>
		The recommended way to install Rust and its tools is to download rustup, Rust's toolchain
		manager.<br />
		You can download it here:
		<a href="https://www.rust-lang.org/tools/install" rel="external noreferrer" target="_blank"
			>https://www.rust-lang.org/tools/install (RUSTUP-INIT)</a
		>
	</p>

	<p>
		After the installation you can run <code>rustc --version</code> (Rust's compiler) to check, if it's
		installed properly.
	</p>
</Lesson>
