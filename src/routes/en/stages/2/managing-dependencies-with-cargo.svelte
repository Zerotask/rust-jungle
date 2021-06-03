<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson
	index={5}
	title="Managing Dependencies With Cargo"
	description="With cargo you can install, update or remove dependencies in Rust"
	tags="cargo dependencies"
	previous="cargo"
	next="cargo-subcommands"
>
	<p>
		At first, you have to create a <i>workspace</i> (project) with either
		<code>cargo new my-project</code>
		or
		<code>cargo init</code>.<br />
		This will create a <i>Cargo.toml</i> file in the root folder. This is your centralized configuration
		file for your Rust program. Within that file you can pass meta data like author or a version and
		it's also used to manage the dependencies for your program.
	</p>

	<p>
		Unlike other package manager (like npm for example) there is no CLI command to handle
		dependencies. In Rust you have to add it to <i>Cargo.toml</i>
		and the compiler will take care of them.
	</p>

	<pre>
        <code>
[dependencies]
git2 = "0.13.18"
webbrowser = "0.5.5"
zip = "0.5"
        </code>
    </pre>

	<p>
		This will add the 3 dependencies <i>git2</i>, <i>webbrowser</i> and <i>zip</i> to your project. The
		next time you compile your program, those dependencies will get downloaded and compiled.
	</p>

	<p>To search for packages, or <i>crates</i> how Rust calls it, you can:</p>
	<ul>
		<li>run <code>cargo search crate-name</code></li>
		<li>
			open the Rust community’s crate registry:
			<ExternalLink href="https://crates.io" />
		</li>
		<li>
			open the unofficial crates.io alternative which offers categories for crates:
			<ExternalLink href="https://lib.rs" />
		</li>
	</ul>

	<p>To update your dependencies, you simply run: <code>cargo update</code></p>

	<p>
		In the next lesson you will learn how to add <i>cargo</i> subcommands (sometimes called Rust binarier).
	</p>
</Lesson>
