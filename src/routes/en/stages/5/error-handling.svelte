<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={7}
	title="Error Handling"
	summary="You can use the ? operator to easily handle errors with Result"
	tags="error-handling"
	previous="failable-main"
	next="ugly-option-result-handling"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20do_something_that_might_fail(i%3A%20i32)%20-%3E%20Result%3Cf32%2C%20String%3E%20%7B%0A%20%20%20%20if%20i%20%3D%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20Ok(13.0)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20Err(String%3A%3Afrom(%22this%20is%20not%20the%20right%20number%22))%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20-%3E%20Result%3C()%2C%20String%3E%20%7B%0A%20%20%20%20%2F%2F%20Look%20at%20how%20much%20code%20we%20saved!%0A%20%20%20%20let%20v%20%3D%20do_something_that_might_fail(42)%3F%3B%0A%20%20%20%20println!(%22found%20%7B%7D%22%2C%20v)%3B%0A%20%20%20%20Ok(())%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch09-00-error-handling.html"
>
	<p>
		<code>Result</code> is so common that Rust has a powerful operator <code>?</code> for working with
		them. These two statements are equivalent:
	</p>

	<code>do_something_that_might_fail()?</code>

	<pre>
        <code>
match do_something_that_might_fail() {'{'}
    Ok(v) => v,
    Err(e) => return Err(e),
{'}'}
        </code>
    </pre>
</Lesson>
