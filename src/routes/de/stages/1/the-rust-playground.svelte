<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Station 1: Der Rust-Spielplatz"
	previous="./"
	next="variables"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Welcome%20to%20the%20playground!%20You%20can%20modify%20the%20code%20in%20here.%22)%3B%0A%7D%0A"
>
	<p>
		Rust-Dschungel macht sich das interaktive Coding Tool vom <a
			href="https://play.rust-lang.org"
			rel="external noreferrer"
			title="Go to the Rust Playground">Rust Playground</a
		> zu nutze.
	</p>

	<p>
		Beispiele in Rust lassen sich so spielend leicht testen. Hierbei sind deiner Kreativität auch
		keine Grenzen gesetzt. Ändere Codeschnipsel, teste Funktionen, lass deiner Fantasie freien Lauf!
	</p>
</Lesson>
