<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={10}
	title="How to test functions"
	summary="Rust provides built-in tools to test functions"
	tags="testing functions"
	previous="reading-command-line-arguments"
	next="summary"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20add(number1%3A%20i32%2C%20number2%3A%20i32)%20-%3E%20i32%20%7B%0D%0A%20%20%20%20number1%20%2B%20number2%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20println!(%222%20%2B%202%20are%20%7B%7D%22%2C%20add(2%2C%202))%3B%0D%0A%7D%0D%0A%0D%0A%23%5Bcfg(test)%5D%0D%0Amod%20test%20%7B%0D%0A%20%20%20%20use%20super%3A%3A*%3B%0D%0A%0D%0A%20%20%20%20%23%5Btest%5D%0D%0A%20%20%20%20fn%20test_add_two_numbers_are_equal()%20%7B%0D%0A%20%20%20%20%20%20%20%20assert_eq!(add(2%2C%202)%2C%204)%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%23%5Btest%5D%0D%0A%20%20%20%20fn%20test_add_two_numbers_are_not_equal()%20%7B%0D%0A%20%20%20%20%20%20%20%20assert_ne!(add(2%2C%20200)%2C%204)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch11-01-writing-tests.html https://doc.rust-lang.org/book/ch11-03-test-organization.html https://doc.rust-lang.org/cargo/commands/cargo-test.html"
>
	<p>Rust provides a built-in testing tool with <code>cargo test</code></p>

	<p>
		Since you don't want testing code being a part of your production program, you have to tell the
		Rust compiler that it's for testing only.<br />
		You can do that by annotating <code>#[cfg(test)]</code>. Rust will compile all code after it
		only if you run <code>cargo test</code>.
	</p>

	<p>
		After this annotation, we will create an own module (container) for our test with <code
			>mod test {'{ }'}</code
		>.
	</p>

	<p>
		Since functions are block-scoped, we have to tell our module, to import everthing from the outer
		module with <code>use super::*;</code>
	</p>

	<p>
		Now we are good to go and can write actual test functions. Since there can be setup functions or
		utility functions, you have to tell <code>cargo test</code> which function should be tested by
		annotating it with <code>#[test]</code>
	</p>

	<p>
		Finally we have 3 assert macros to actually test a function. To test if something is equal (<code
			>assert_eq!</code
		>), not equal (<code>assert_ne!</code>) or if something is simply <code>true</code> (<code
			>assert!</code
		>).
	</p>

	<p>You will learn all those new things in detail in later lessons. Don't worry.</p>
</Lesson>
