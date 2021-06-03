<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={5}
	title="Abstraction With Selective Exposure"
	previous="encapsulation-with-methods"
	next="polymorphism-with-traits"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20creature.get_sound())%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/mod/visibility.html"
>
	<p>Rust can hide the inner workings of objects.</p>

	<p>By default fields and methods are accessible only to the module they belong to.</p>

	<p>The <code>pub</code> keyword exposes struct fields and methods outside of the module.</p>
</Lesson>
