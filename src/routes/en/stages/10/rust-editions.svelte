<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={16}
	title="Rust Editions"
	previous="cargo-toml-file"
	next="summary"
	furtherInformationUrls="https://doc.rust-lang.org/edition-guide/editions/index.html"
>
	<p>
		Rust ships new releases on a six-week cycle and you can easily update to it with <i
			>rustup update</i
		>.<br />
		This means you will get constantly new, but smaller updates, not only for Rust, but also for the
		other tools like <i>cargo</i> or <i>rustup</i>.
	</p>

	<p>
		Besides regular Rust updates, every 2 or 3 years the Rust team releases a new <i>edition</i>.
		You can set your <i>Rust edition</i> in the <i>Cargo.toml</i> file.
	</p>

	<p>
		New editions can add new keywords which could conflict or be incompatible with your existing
		code. Therefore you have to opt-in to use a newer edition or you just stay on a working edition
		and everything is fine.
	</p>

	<p>
		The Rust compiler will support all editions that existed prior to the compiler's release, and
		can link crates of any supported editions together.
	</p>
</Lesson>
