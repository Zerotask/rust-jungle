<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={7}
	title="match"
	previous="for"
	next="returning-values-from-block-expressions"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20x%20%3D%2042%3B%0A%0A%20%20%20%20match%20x%20%7B%0A%20%20%20%20%20%20%20%200%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22found%20zero%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%2F%20we%20can%20match%20against%20multiple%20values%0A%20%20%20%20%20%20%20%201%20%7C%202%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22found%201%20or%202!%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%2F%20we%20can%20match%20against%20ranges%0A%20%20%20%20%20%20%20%203..%3D9%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22found%20a%20number%203%20to%209%20inclusively%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%2F%20we%20can%20bind%20the%20matched%20number%20to%20a%20variable%0A%20%20%20%20%20%20%20%20matched_num%20%40%2010..%3D100%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22found%20%7B%7D%20number%20between%2010%20to%20100!%22%2C%20matched_num)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%2F%20this%20is%20the%20default%20match%20that%20must%20exist%20if%20not%20all%20cases%20are%20handled%0A%20%20%20%20%20%20%20%20_%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22found%20something%20else!%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A"
	links="https://doc.rust-lang.org/book/ch06-02-match.html"
>
	<p>
		Miss your switch statement? Rust has an incredibly useful keyword for matching all possible
		conditions of a value and executing a code path if the match is true. Let's see how this works
		for numbers. We will have more to say in future chapters on pattern matching more complex data.
		I promise you it will be worth the wait.
	</p>

	<p>
		<code>match</code> is exhaustive, so all cases must be handled.
	</p>

	<p>
		Matching combined with destructuring is by far one of the most common patterns you will see in
		all of Rust.
	</p>
</Lesson>
