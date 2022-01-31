<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={6}
	title="Polymorphism With Traits"
	summary="Rust supports polymorphism with traits. Traits allow us to associate a set of methods with a struct type"
	tags="traits"
	previous="abstraction-with-selective-exposure"
	next="implemented-methods-on-traits"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Atrait%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%3B%0A%7D%0A%0Aimpl%20NoiseMaker%20for%20SeaCreature%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20%26self.get_sound())%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20creature.make_noise()%3B%0A%7D%0A"
>
	<p>
		Rust supports polymorphism with traits. Traits allow us to associate a set of methods with a
		struct type.
	</p>

	<p>We first define the signatures of methods of a trait within:</p>
	<pre>
        <code>
trait MyTrait {'{'}
    fn foo(&self);
{ '}'}
        </code>
    </pre>

	<p>
		When a struct implements a trait, it establishes a contract that allows us to indirectly
		interact with the struct through the trait type (e.g. <code>&dyn MyTrait</code>) without having
		to know the real type.
	</p>

	<p>A struct's implemented traits methods are defined within an implementation block:</p>
	<pre>
        <code>
impl MyTrait for MyStruct  {'{'}
    fn foo(&self) {'{'}
	...
    {'}'}
    ...
{ '}'}
        </code>
    </pre>
</Lesson>
