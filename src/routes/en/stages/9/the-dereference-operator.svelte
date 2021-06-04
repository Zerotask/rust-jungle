<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={5}
	title="The Dereference Operator *"
	previous="references-revisited"
	next="the-dot-operator"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20i32%20%3D%2042%3B%0A%20%20%20%20let%20ref_ref_ref_a%3A%20%26%26%26i32%20%3D%20%26%26%26a%3B%0A%20%20%20%20let%20ref_a%3A%20%26i32%20%3D%20**ref_ref_ref_a%3B%0A%20%20%20%20let%20b%3A%20i32%20%3D%20*ref_a%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20b)%0A%7D"
>
	<p>The <code>*</code> operator is an explicit way to dereference a reference.</p>

	<p>Memory details:</p>
	<ul>
		<li>
			Because <code>i32</code> is a primitive type that implements the <code>Copy</code> trait, the
			bytes of variable <i>a</i> on stack are copied into the bytes of variable <i>b</i>.
		</li>
	</ul>
</Lesson>
