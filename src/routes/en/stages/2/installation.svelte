<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
	import ExternalLink from '$components/externalLink.svelte';
</script>

<Lesson
	index={2}
	title="Installation"
	summary="You can download rust from rust-lang.org"
	tags="development"
	previous="./"
	next="rustup"
>
	<p>
		The recommended way to install Rust and its tools is to download rustup, Rust's toolchain
		manager.<br />
		You can download it here:
		<ExternalLink href="https://www.rust-lang.org/tools/install"
			>https://www.rust-lang.org/tools/install (RUSTUP-INIT)</ExternalLink
		>
	</p>

	<p>
		After the installation you can run <code>rustc --version</code> (Rust's compiler) to check, if it's
		installed properly.
	</p>
</Lesson>
