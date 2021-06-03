<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={7}
	title="Smart Pointers"
	previous="the-dot-operator"
	next="smart-unsafe-code"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Aops%3A%3ADeref%3B%0Astruct%20TattleTell%3CT%3E%20%7B%0A%20%20%20%20value%3A%20T%2C%0A%7D%0Aimpl%3CT%3E%20Deref%20for%20TattleTell%3CT%3E%20%7B%0A%20%20%20%20type%20Target%20%3D%20T%3B%0A%20%20%20%20fn%20deref(%26self)%20-%3E%20%26T%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%20was%20used!%22%2C%20std%3A%3Aany%3A%3Atype_name%3A%3A%3CT%3E())%3B%0A%20%20%20%20%20%20%20%20%26self.value%0A%20%20%20%20%7D%0A%7D%0Afn%20main()%20%7B%0A%20%20%20%20let%20foo%20%3D%20TattleTell%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20%22secret%20message%22%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20%2F%2F%20dereference%20occurs%20here%20immediately%20%0A%20%20%20%20%2F%2F%20after%20foo%20is%20auto-referenced%20for%20the%0A%20%20%20%20%2F%2F%20function%20%60len%60%0A%20%20%20%20println!(%22%7B%7D%22%2C%20foo.len())%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch15-00-smart-pointers.html"
>
	<p>
		In addition to the ability to create references to existing typed data using the <code>&</code> operator,
		Rust gives us the ability to create reference-like structs called smart pointers.
	</p>

	<p>
		We can think of references at a high level as a type that give us access to another type. Smart
		pointers are different in their behavior from normal references in that they operate based on
		internal logic that a programmer writes. You — the programmer — are the smart part.
	</p>

	<p>
		Typically smart pointers implement <code>Deref</code>, <code>DerefMut</code>, and
		<code>Drop</code> traits to specify the logic of what should happen when the structure is
		dereferenced with <code>*</code> and <code>.</code> operators.
	</p>
</Lesson>
