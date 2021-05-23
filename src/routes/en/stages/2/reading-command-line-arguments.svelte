<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html',
		'https://doc.rust-lang.org/std/env/'
	];
</script>

<Lesson
	index="9"
	title="Reading Command Line Arguments"
	previous="writing-a-hello-world-program"
	next="how-to-test-functions"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Aenv%3B%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20let%20args%3A%20Vec%3CString%3E%20%3D%20env%3A%3Aargs().collect()%3B%0D%0A%20%20%20%20println!(%22Your%20arguments%20are%20%7B%3A%3F%7D%22%2C%20%26args)%3B%0D%0A%7D%0D%0A"
	{links}
>
	<p>This one is a bit more difficult, but you will learn the used parts in later lessons.</p>

	<p>
		This should you just give an example of how do you read arguments from the command line.<br />
		In programminging languages like <i>C#</i> or <i>Java</i> you always have to define a parameter
		for it, e. g. <i>String args[]</i>
	</p>

	<p>
		In Rust this is not needed. To read arguments from the command line, you have to import the
		module <code>std::env</code> to collect arguments.<br />
		this is done by writing <code>use std::env;</code>. After it, you can use <code>env</code> in your
		file.
	</p>

	<p>
		With <code>{'let args: Vec<String> = env::args().collect();'}</code> your program will read all
		arguments in a dynamic String array, called Vector. This is similar to Java's parameter (<i
			>String args[]</i
		>)<br />
		Vectors will be covered in a later section.
	</p>

	<p>
		Since this is a <code>Vector</code> we can't simply print it as a string. Therefore we have to
		add <code>:?</code> to the curly braces.<br />
		Formatting will be covered in a later section, don't worry.
	</p>

	<p>
		You can test it locally by creating a project with <code>cargo new hello-arguments</code>,
		adding the code from the Rust Playground and then call it with
		<code>cargo run hello world</code>
	</p>

	<p>
		Then you should see the output: <i
			>Your arguments are ["target\\debug\\hello-arguments.exe", "hello", "world"]</i
		>
	</p>
</Lesson>
