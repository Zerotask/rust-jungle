<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/reference/macros.html',
		'https://doc.rust-lang.org/book/ch19-06-macros.html'
	];
</script>

<Lesson
	index="{12}"
	title="Macros"
	previous="returning-nothing"
	next="compiler-messages"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=%2F%2F%20Example%20from%20the%20actual%20vec!%20macro.%0A%23%5Bmacro_export%5D%0Amacro_rules!%20vec2%20%7B%0A%20%20%20%20(%20%24(%20%24x%3Aexpr%20)%2C*%20)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20mut%20temp_vec%20%3D%20Vec%3A%3Anew()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%24(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20temp_vec.push(%24x)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20)*%0A%20%20%20%20%20%20%20%20%20%20%20%20temp_vec%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20You%20can%20change%20that%20from%20vec2!%20to%20vec!%20and%20have%20the%20same%20output.%0A%20%20%20%20let%20a%20%3D%20vec2!%5B%22hello%22%2C%20%22world%22%5D%3B%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20a)%3B%0A%7D%0A"
	{links}
>
	<p>
		We’ve used macros like <code>println!</code> throughout this stage, but we haven’t fully explored
		what a macro is and how it works. The term macro refers to a family of features in Rust: declarative
		macros with macro_rules! and three kinds of procedural macros:
	</p>
	<ul>
		<li>
			Custom <code>#[derive]</code> macros that specify code added with the derive attribute used on
			structs and enums
		</li>
		<li>Attribute-like macros that define custom attributes usable on any item</li>
		<li>
			Function-like macros that look like function calls but operate on the tokens specified as
			their argument
		</li>
	</ul>

	<p>
		To distinguish it from functions, macros are a way of writing code that writes other code, which
		is known as <i>metaprogramming</i>
	</p>

	<p>
		You can write your own macros with <i>macro_rules!</i>
	</p>
</Lesson>
