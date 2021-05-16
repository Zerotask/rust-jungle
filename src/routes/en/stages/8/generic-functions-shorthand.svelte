<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 8.13: Generic Functions Shorthand"
	previous="generic-functions-shorthand"
	next="box"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Atrait%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%3B%0A%7D%0A%0Aimpl%20NoiseMaker%20for%20SeaCreature%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20%26self.get_sound())%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20generic_make_noise(creature%3A%20%26impl%20NoiseMaker)%0A%7B%0A%20%20%20%20%2F%2F%20we%20know%20the%20real%20type%20at%20compile-time%0A%20%20%20%20creature.make_noise()%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20generic_make_noise(%26creature)%3B%0A%7D%0A"
>
	<p>Rust has a shorthand for expressing generics constrained by a trait:</p>
	<pre>
        <code>
fn my_function(foo: impl Foo) { '{'}
    ...
{ '}'}
        </code>
    </pre>

	<p>This is equivalent to writing:</p>
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
</Lesson>
