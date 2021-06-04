<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
	import ExternalLink from '$components/externalLink.svelte';
</script>

<Lesson
	index={6}
	title="Cargo Subcommands"
	summary="Cargo subcommands allow you to add additional functions to your package manager"
	tags="cargo"
	previous="managing-dependencies-with-cargo"
	next="setup-visual-studio-code"
>
	<p>
		<i>cargo</i> subcommands are an option to add additional commands which are developed by the community
		to customize your developing experience.
	</p>

	<p>
		To install a <i>cargo</i> subcommand, you simply run:
		<code>cargo install name-of-subcommand</code>
	</p>

	<p>
		For example to install the
		<ExternalLink href="https://github.com/passcod/cargo-watch">cargo-watch</ExternalLink>
		subcommand, you simply run: <code>cargo install cargo-watch</code>.<br />
		To see all available option for this new cargo subcommand, just run:
		<code>cargo watch --help</code>
	</p>

	<p>
		<i>cargo watch</i> is a pretty useful command to run or test your code everytime something has
		changed. It can be used like: <code>cargo watch -x run</code>. This would execute
		<code>cargo run</code> whenever it detects a change.
	</p>

	<p>
		There are other useful commands like
		<ExternalLink href="https://github.com/killercup/cargo-edit">cargo-edit</ExternalLink>
		which adds multiple subcommands (cargo add, cargo rm and cargo upgrade) to handle dependencies via
		CLI commands.
	</p>

	<p>
		Further <i>cargo</i> subcommands can be found here:
		<ExternalLink href="https://github.com/topics/cargo-subcommand" />
	</p>
</Lesson>
