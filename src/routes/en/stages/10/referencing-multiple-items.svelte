<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/std/keyword.use.html'];
</script>

<Lesson
	index={6}
	title="Referencing Multiple Items"
	previous="referencing-other-modules-and-crates"
	next="creating-modules"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3A%7B%0D%0A%20%20%20%20f64%3A%3Aconsts%3A%3A%7BPI%2C%20TAU%7D%2C%0D%0A%20%20%20%20fmt%3A%3ADebug%2C%0D%0A%7D%3B%0D%0A%0D%0A%23%5Bderive(Debug)%5D%0D%0Astruct%20Foo%20%7B%0D%0A%20%20%20%20name%3A%20String%2C%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20println!(%22Pi%20is%20%7B%7D%22%2C%20PI)%3B%0D%0A%20%20%20%20println!(%22Tau%20is%20%7B%7D%22%2C%20TAU)%3B%0D%0A%0D%0A%20%20%20%20let%20foo%20%3D%20Foo%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Bar%22)%2C%0D%0A%20%20%20%20%7D%3B%0D%0A%20%20%20%20println!(%22Foo%20is%20%7B%3A%3F%7D%22%2C%20foo)%3B%0D%0A%7D%0D%0A"
	{links}
>
	<p>
		Multiple items can be referenced in a single module path as so:<br />
		<code>{'use std::f64::consts::{PI,TAU}'}</code>
	</p>

	<p>
		To import everything from <code>std::f64::consts</code>, you can use the wildcard <i>*</i> as
		so:<br />
		<code>{'use std::f64::consts::*'}</code>
	</p>

	<p>
		You can also combine it:<br />
		<code>{'use std::{f64::consts::{PI, TAU}, fmt::Debug};'}</code>
	</p>

	<p>
		This is equievalent to:<br />
		<code>{'use std::f64::consts::{PI, TAU};'}</code><br /><code>use std::fmt::Debug;</code>
	</p>
</Lesson>
