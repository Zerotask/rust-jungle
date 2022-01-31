<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={8}
	title="Writing A Hello World Program"
	tags="development"
	previous="setup-visual-studio-code"
	next="reading-command-line-arguments"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%2C%20world!%22)%3B%0A%7D%0A"
>
	<p>
		You can create a new file <i>main.rs</i> and put the code from the <i>Rust Playground</i> in it<br
		/>
		or you can use <i>cargo</i> to create a new project with either
		<code>cargo new hello-world</code>
		or <code>cargo init</code>
	</p>

	<p>
		<i>cargo</i> will automatically create a <i>src/main.rs</i> for you which already has a
		<i>Hello, world!</i> output in it.
	</p>

	<p>
		If you chose <i>cargo</i> to create a basic project for you, all you have to do is to run:
		<code>cargo run</code> in a terminal and you should see the output: <i>Hello, world!</i>
	</p>

	<p>
		If you created a <i>main.rs</i> without <i>cargo</i>, you have to use the Rust compiler
		<i>rustc</i>
		and run: <code>rustc main.rs</code>.<br />
		This will create a <i>main.exe</i> in the same directory. Now you have to execute this compiled
		file (<code>./main.exe</code>) and you will see the same output.
	</p>

	<p>In a later lesson you will also learn how to split your code into multiple files.</p>
</Lesson>
