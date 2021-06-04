<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={3}
	title="rustup"
	tags="compiler development"
	previous="installation"
	next="cargo"
	furtherInformationUrls="https://doc.rust-lang.org/nightly/edition-guide/rust-2018/rustup-for-managing-rust-versions.html"
>
	<p>
		<code>rustup</code> is Rust's toolchain manager. To see all available options of this tool, run
		<code>rustup --help</code>.
	</p>

	<p>It's used for:</p>
	<ul>
		<li>updating Rust: <code>rustup update</code></li>
		<li>
			installing Rust tools like <i>Clippy</i> (a static analysis tool):
			<code>rustup component add clippy</code> - you can run it then with <code>cargo clippy</code>
		</li>
		<li>Open the official <i>The book</i>: <code>rustup doc --book</code></li>
		<li>Show active and installed tools: <code>rustup show</code></li>
		<li>Switching between profiles, e. g. stable and nightly version of Rust</li>
	</ul>

	<p>
		<i>rustup</i> can be updated with <code>rustup self update</code>, but it's also being updated
		at the end of <code>rustup update</code>.
	</p>
</Lesson>
