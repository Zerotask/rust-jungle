<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={12}
	title="Generic Functions"
	previous="handling-unsized-data"
	next="generic-functions-shorthand"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Atrait%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%3B%0A%7D%0A%0Aimpl%20NoiseMaker%20for%20SeaCreature%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20%26self.get_sound())%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20generic_make_noise%3CT%3E(creature%3A%20%26T)%0Awhere%0A%20%20%20%20T%3A%20NoiseMaker%2C%0A%7B%0A%20%20%20%20%2F%2F%20we%20know%20the%20real%20type%20at%20compile-time%0A%20%20%20%20creature.make_noise()%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20generic_make_noise(%26creature)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/generics/gen_fn.html"
	tags="generics functions"
>
	<p>
		Generics in Rust work hand in hand with traits. When we describe a parameterized type <code
			>T</code
		> we can constrain what types can be used as an argument by listing what required traits the argument
		must implement.
	</p>

	<p>In this example type <code>T</code> must implement trait <code>Foo</code>:</p>
	<pre>
        <code>
fn my_function{'<T>'}(foo: T)
where
    T: Foo
{ '{'}
    ...
{ '}'}
        </code>
    </pre>

	<p>
		By using generics we create static typed functions at compile time that will have known types
		and sizes, allowing us to perform static dispatch and store as a sized value.
	</p>
</Lesson>
