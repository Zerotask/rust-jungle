<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/std/boxed/struct.Box.html',
		'https://doc.rust-lang.org/rust-by-example/std/box.html'
	];
</script>

<Lesson
	index={14}
	title="Box"
	previous="generic-functions-shorthand"
	next="generic-structs-revisited"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Atrait%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%3B%0A%7D%0A%0Aimpl%20NoiseMaker%20for%20SeaCreature%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20%26self.get_sound())%3B%0A%20%20%20%20%7D%0A%7D%0A%0Astruct%20Ocean%20%7B%0A%20%20%20%20animals%3A%20Vec%3CBox%3Cdyn%20NoiseMaker%3E%3E%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20ferris%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20let%20sarah%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Sarah%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22swish%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20let%20ocean%20%3D%20Ocean%20%7B%0A%20%20%20%20%20%20%20%20animals%3A%20vec!%5BBox%3A%3Anew(ferris)%2C%20Box%3A%3Anew(sarah)%5D%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20for%20a%20in%20ocean.animals.iter()%20%7B%0A%20%20%20%20%20%20%20%20a.make_noise()%3B%0A%20%20%20%20%7D%0A%7D%0A"
	{links}
>
	<p>
		<code>Box</code> is a data structure that allows us to move our data from the stack to the heap.
	</p>

	<p>
		<code>Box</code> is a struct known as a smart pointer that holds the pointer to our data on the heap.
	</p>

	<p>
		Because <code>Box</code> is a struct with a known size (because it just holds a pointer), it is often
		used as a way to store a reference to something in a struct that must know the size of its fields.
	</p>

	<p><code>Box</code> is so common it can be used from anywhere:</p>

	<p><code>Box::new(Foo {'{ ... }'})</code></p>
</Lesson>
