<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={4}
	title="Encapsulation With Methods"
	summary="Rust supports the concept of an object that is a struct associated with some functions, also known as methods"
	tags="methods"
	previous="rust-is-not-oop"
	next="abstraction-with-selective-exposure"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=struct%20SeaCreature%20%7B%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20creature.get_sound())%3B%0A%7D%0A"
>
	<p>
		Rust supports the concept of an object that is a struct associated with some functions (also
		known as <i>methods</i>).
	</p>

	<p>
		The first parameter of any method must be a reference to the instance associated with the method
		call (e.g. <code>instanceOfObj.foo()</code>). Rust uses:
	</p>
	<ul>
		<li><code>&self</code> - Immutable reference to the instance.</li>
		<li><code>&mut self</code> - Mutable reference to the instance.</li>
	</ul>

	<p>Methods are defined within an implementation block with keyword <code>impl</code>:</p>
	<pre>
        <code>
impl MyStruct {'{'}
    ...
    fn foo(&self) {'{'}
        ...
    { '}'}
{ '}'}
        </code>
    </pre>
</Lesson>
