<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
	const links: string[] = ['https://doc.rust-lang.org/error-index.html'];
</script>

<Lesson
	index="{13}"
	title="Compiler Messages"
	previous="macros"
	next="summary"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20message%20%3D%20%22hello%20world%22%3B%0D%0A%20%20%20%20println!(message)%3B%0D%0A%7D"
	{links}
>
	<p>
		Compiler messages in Rust are really helpful and informative in most cases. The Rust team and
		the contributors are constantly improving the messages.
	</p>

	<p>Compiler messages consists of 4 parts:</p>
	<ul>
		<li>
			A short error message, sometimes with an error code, e. g. <code
				>error[E0277]: `Foo` doesn't implement `Debug`</code
			>
		</li>
		<li>The code part, which is colorful and with underlines</li>
		<li>
			An optional <i>help</i> block which provides solutions, which you can sometimes just copy & paste
		</li>
		<li>
			An optional further information message, e. g.
			<code>For more information about this error, try `rustc --explain E0277`</code>
		</li>
	</ul>

	<p>Run the code from the Rust Playground and read the <i>Standard Error</i> block.</p>

	<p>
		You can actually copy & paste the provided help to get your program working as expected.<br />
		After it, your programm will look like <ExternalLink
			href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20message%20%3D%20%22hello%20world%22%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20message)%3B%0D%0A%7D"
			>this</ExternalLink
		>.
	</p>
</Lesson>
