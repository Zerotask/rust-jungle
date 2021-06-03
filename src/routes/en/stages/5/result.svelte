<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={5}
	title="Result"
	previous="option"
	next="failable-main"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20do_something_that_might_fail(i%3Ai32)%20-%3E%20Result%3Cf32%2CString%3E%20%7B%0A%20%20%20%20if%20i%20%3D%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20Ok(13.0)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20Err(String%3A%3Afrom(%22this%20is%20not%20the%20right%20number%22))%20%20%20%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20result%20%3D%20do_something_that_might_fail(12)%3B%0A%0A%20%20%20%20%2F%2F%20match%20lets%20us%20deconstruct%20Result%20elegantly%20and%20ensure%20we%20handle%20all%20cases!%0A%20%20%20%20match%20result%20%7B%0A%20%20%20%20%20%20%20%20Ok(v)%20%3D%3E%20println!(%22found%20%7B%7D%22%2C%20v)%2C%0A%20%20%20%20%20%20%20%20Err(e)%20%3D%3E%20println!(%22Error%3A%20%7B%7D%22%2Ce)%2C%0A%20%20%20%20%7D%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/std/result/enum.Result.html https://doc.rust-lang.org/rust-by-example/std/result.html"
	tags="generics enum"
>
	<p>
		Rust has a built in generic enum called <code>{'Result<T, E>'}</code> that allows us to return a
		value that has the possibility of failing. It is the idiomatic way in which the language does error
		handling.
	</p>

	<p>Note that our generics type has multiple parameterized types separated by a comma.</p>

	<p>
		This enum is so common, instances of the enum can be created anywhere with the enum variants <code
			>Ok</code
		>
		and <code>Err</code>.
	</p>
</Lesson>
