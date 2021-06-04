<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
	import ExternalLink from '$components/externalLink.svelte';
</script>

<Lesson
	index={15}
	title="Cargo.toml File"
	previous="your-own-prelude"
	next="rust-editions"
	furtherInformationUrls="https://doc.rust-lang.org/cargo/reference/manifest.html"
>
	<p>
		The <i>Cargo.toml</i> file is the central configuration file when you decide to use
		<i>cargo</i>.<br />
		It's automatically created with <i>cargo new / init</i>.
	</p>

	<p>In the <i>Cargo.toml</i> file you can define:</p>
	<ul>
		<li>package information like name, version, author or edition</li>
		<li>target information</li>
		<li>dependencies</li>
		<li>
			<ExternalLink href="https://doc.rust-lang.org/cargo/reference/workspaces.html"
				>workspaces</ExternalLink
			>
		</li>
		<li>
			<ExternalLink href="https://doc.rust-lang.org/cargo/reference/profiles.html"
				>profiles</ExternalLink
			>
		</li>
		<li>
			<ExternalLink href="https://doc.rust-lang.org/cargo/reference/features.html"
				>features</ExternalLink
			>
		</li>
	</ul>

	<p>
		Besides the <i>Cargo.toml</i> there will be a <i>Cargo.lock</i> file which consists of a table of
		your dependencies with concret version
	</p>
</Lesson>
