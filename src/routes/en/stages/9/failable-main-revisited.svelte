<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={11}
	title="Failable Main Revisited"
	previous="heap-allocated-memory"
	next="referencing-counting"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=use%20core%3A%3Afmt%3A%3ADisplay%3B%0Ause%20std%3A%3Aerror%3A%3AError%3B%0A%0Astruct%20Pie%3B%0A%0A%23%5Bderive(Debug)%5D%0Astruct%20NotFreshError%3B%0A%0Aimpl%20Display%20for%20NotFreshError%20%7B%0A%20%20%20%20fn%20fmt(%26self%2C%20f%3A%20%26mut%20std%3A%3Afmt%3A%3AFormatter%3C'_%3E)%20-%3E%20std%3A%3Afmt%3A%3AResult%20%7B%0A%20%20%20%20%20%20%20%20write!(f%2C%20%22This%20pie%20is%20not%20fresh!%22)%0A%20%20%20%20%7D%0A%7D%0A%0Aimpl%20Error%20for%20NotFreshError%20%7B%7D%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20eat(%26self)%20-%3E%20Result%3C()%2C%20Box%3Cdyn%20Error%3E%3E%20%7B%0A%20%20%20%20%20%20%20%20Err(Box%3A%3Anew(NotFreshError))%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20-%3E%20Result%3C()%2C%20Box%3Cdyn%20Error%3E%3E%20%7B%0A%20%20%20%20let%20heap_pie%20%3D%20Box%3A%3Anew(Pie)%3B%0A%20%20%20%20heap_pie.eat()%3F%3B%0A%20%20%20%20Ok(())%0A%7D%0A"
>
	<p>
		Rust code may have a plethora of representations of errors, but the standard library has a
		universal trait <code>std::error::Error</code> for describing errors.
	</p>

	<p>
		Using a smart pointer <code>Box</code> we can use the type
		<code>{'Box<dyn std::error::Error>'}</code> as a common type for returning errors because it allows
		us to propagate up an error on the heap and interact with it at a high level without having to know
		a specific type.
	</p>

	<p>
		Early in Rust Jungle we learned that the <i>main</i> function can return an error. We can now
		return a type capable of describing almost any kind of error that might occur in our program so
		long as the error's data structure implements Rust's common <code>Error</code> trait.
	</p>

	<p><code>{'fn main() -> Result<(), Box<dyn std::error:Error>>'}</code></p>
</Lesson>
