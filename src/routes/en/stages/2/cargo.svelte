<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/cargo/commands/index.html'];
</script>

<Lesson index={4} title="cargo" previous="rustup" next="managing-dependencies-with-cargo" {links}>
	<p>
		<i>cargo</i> is Rust's official package manager. If you've installed Rust with rustup, then
		cargo is already installed. You can verify that by running <code>cargo --version</code>
	</p>

	<p>
		To see all available options you have with <i>cargo</i>, simply run: <code>cargo --help</code>
	</p>

	<p><i>cargo</i> is used for</p>
	<ul>
		<li>
			Creating new projects with:
			<ul>
				<li>
					<code>cargo new my-project</code> - This will create a new folder <i>my-project</i> with a
					basic setup.
				</li>
				<li><code>cargo init</code> - this will create a new setup in the current folder.</li>
			</ul>
		</li>
		<li>
			Compile your code:
			<ul>
				<li><code>cargo build</code> - creates a new debug build.</li>
				<li><code>cargo build --release</code> - creates an optimized build for production.</li>
			</ul>
		</li>
		<li>
			Alternatively you can do compiler checks without compilation with <code>cargo check</code>
		</li>
		<li>
			During development you can also compile and execute it directly with <code>cargo run</code>
		</li>
		<li>
			To get a documentation of your code and all your used dependencies, simly run: <code
				>cargo doc --open</code
			>
		</li>
		<li>To run tests, just execute <code>cargo test</code></li>
		<li>Formatting your code? No problem with <code>cargo fmt</code></li>
		<li>and many more</li>
	</ul>

	<p>In the next lesson you will learn how to deal with dependencies in Rust using <i>cargo</i>.</p>
</Lesson>
