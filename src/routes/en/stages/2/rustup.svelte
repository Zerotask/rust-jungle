<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson title="Stage 2.3: rustup" previous="installation" next="cargo">
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

	<p>To update the tool itself, you can simply run: <code>rustup self update</code></p>
</Lesson>
