<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={6}
	title="Failable Main"
	previous="result"
	next="error-handling"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20do_something_that_might_fail(i%3A%20i32)%20-%3E%20Result%3Cf32%2C%20String%3E%20%7B%0A%20%20%20%20if%20i%20%3D%3D%2042%20%7B%0A%20%20%20%20%20%20%20%20Ok(13.0)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20Err(String%3A%3Afrom(%22this%20is%20not%20the%20right%20number%22))%0A%20%20%20%20%7D%0A%7D%0A%0A%2F%2F%20Main%20returns%20no%20value%2C%20but%20could%20return%20an%20error!%0Afn%20main()%20-%3E%20Result%3C()%2C%20String%3E%20%7B%0A%20%20%20%20let%20result%20%3D%20do_something_that_might_fail(12)%3B%0A%0A%20%20%20%20match%20result%20%7B%0A%20%20%20%20%20%20%20%20Ok(v)%20%3D%3E%20println!(%22found%20%7B%7D%22%2C%20v)%2C%0A%20%20%20%20%20%20%20%20Err(_e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20handle%20this%20error%20gracefully%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20return%20a%20new%20error%20from%20main%20that%20said%20what%20happened!%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Err(String%3A%3Afrom(%22something%20went%20wrong%20in%20main!%22))%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Notice%20we%20use%20a%20unit%20value%20inside%20a%20Result%20Ok%0A%20%20%20%20%2F%2F%20to%20represent%20everything%20is%20fine%0A%20%20%20%20Ok(())%0A%7D%0A"
>
	<p>
		the <i>main</i> function has the capability of returning a <code>Result</code>!
	</p>
</Lesson>
