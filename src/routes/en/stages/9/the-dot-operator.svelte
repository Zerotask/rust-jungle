<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={6}
	title="The Dot Operator ."
	summary="The . operator is used in accessing fields and methods of a reference"
	tags="operators"
	previous="the-dereference-operator"
	next="smart-pointers"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Foo%20%7B%0A%20%20%20%20value%3A%20i32%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20f%20%3D%20Foo%20%7B%20value%3A%2042%20%7D%3B%0A%20%20%20%20let%20ref_f%20%3D%20%26f%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20ref_f.value)%3B%0A%7D"
>
	<p>
		The <code>.</code> operator is used in accessing fields and methods of a reference. It works a bit
		more subtly.
	</p>

	<p>
		Whoa, why didn't we need to add <code>*</code> before <code>ref_f</code>? This is because the
		<code>.</code>
		operator automatically dereferences a sequence of references.
	</p>
</Lesson>
