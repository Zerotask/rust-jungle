<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = ['https://doc.rust-lang.org/book/ch03-03-how-functions-work.html'];
</script>

<Lesson
	title="Stage 1.9: Functions"
	previous="arrays"
	next="multiple-return-values"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20add(x%3A%20i32%2C%20y%3A%20i32)%20-%3E%20i32%20%7B%0A%20%20%20%20return%20x%20%2B%20y%3B%0A%7D%0A%0Afn%20subtract(x%3A%20i32%2C%20y%3A%20i32)%20-%3E%20i32%20%7B%0A%20%20%20%20x%20-%20y%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20println!(%2242%20%2B%2013%20%3D%20%7B%7D%22%2C%20add(42%2C%2013))%3B%0A%20%20%20%20println!(%2242%20-%2013%20%3D%20%7B%7D%22%2C%20subtract(42%2C%2013))%0A%7D%0A"
	{links}
>
	<p>A function has zero or more parameters.</p>

	<p>
		In this example, the <i>add</i> function takes two arguments of type <code>i32</code> (signed integer
		of 32-bit length).
	</p>

	<p>
		If you just want to return an expression, you can drop the <code>return</code> keyword and the
		semicolon at the end, as we did in the <i>subtract</i> function.
	</p>

	<p>Function names are always in <i>snake_case</i>.</p>

	<p>
		Hint: if you define a function, the data it accepts are called parameters. If you call that
		function and pass data to it, then it's called arguments.
	</p>
</Lesson>
