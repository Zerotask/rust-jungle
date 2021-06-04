<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={6}
	title="Basic Type Conversion"
	summary="Rust allows you to easily convert data types with the as keyword"
	tags="data-types"
	previous="basic-types"
	next="constants"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%2013u8%3B%0A%20%20%20%20let%20b%20%3D%207u32%3B%0A%20%20%20%20let%20c%20%3D%20a%20as%20u32%20%2B%20b%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20c)%3B%0A%0A%20%20%20%20let%20t%20%3D%20true%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20t%20as%20u8)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/types/cast.html"
>
	<p>
		Rust requires explicitness when it comes to numeric types. One cannot use a <code>u8</code> for
		a <code>u32</code> casually without error.
	</p>

	<p>Luckily Rust makes numeric type conversions very easy with the <code>as</code> keyword.</p>
</Lesson>
