<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={5}
	title="Basic Types"
	previous="changing-variables"
	next="basic-type-conversion"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20x%20%3D%2012%3B%20%2F%2F%20by%20default%20this%20is%20i32%0A%20%20%20%20let%20a%20%3D%2012u8%3B%0A%20%20%20%20let%20b%20%3D%204.3%3B%20%2F%2F%20by%20default%20this%20is%20f64%0A%20%20%20%20let%20c%20%3D%204.3f32%3B%0A%20%20%20%20let%20bv%20%3D%20true%3B%0A%20%20%20%20let%20t%20%3D%20(13%2C%20false)%3B%0A%20%20%20%20let%20sentence%20%3D%20%22hello%20world!%22%3B%0A%20%20%20%20println!(%0A%20%20%20%20%20%20%20%20%22%7B%7D%20%7B%7D%20%7B%7D%20%7B%7D%20%7B%7D%20%7B%7D%20%7B%7D%20%7B%7D%22%2C%0A%20%20%20%20%20%20%20%20x%2C%20a%2C%20b%2C%20c%2C%20bv%2C%20t.0%2C%20t.1%2C%20sentence%0A%20%20%20%20)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch03-02-data-types.html"
>
	<p>Rust has a variety of familiar types:</p>
	<ul>
		<li>booleans - <code>bool</code> for representing true/false</li>
		<li>
			unsigned integers - <code>u8</code> <code>u16</code> <code>u32</code> <code>u64</code>
			<code>u128</code> for representing nonnegative whole numbers
		</li>
		<li>
			signed integers - <code>i8</code> <code>i16</code> <code>i32</code> <code>i64</code>
			<code>i128</code> for representing whole numbers
		</li>
		<li>
			pointer sized integers - <code>usize</code> <code>isize</code> for representing indexes and sizes
			of things in memory
		</li>
		<li>floating point - <code>f32</code> <code>f64</code></li>
		<li>
			tuple - <code>(value, value, ...)</code> for passing fixed sequences of values on the stack
		</li>
		<li>
			arrays - <code>[value, value, ...]</code> a collection of similar elements with fixed length known
			at compile time
		</li>
		<li>slices - a collection of similar elements with length known at runtime</li>
		<li><code>str</code>(string slice) - text with a length known at runtime</li>
	</ul>

	<p>
		Text might be more complex than you are used to in other languages; since Rust is a system
		programming language, it cares about memory issues you might not be used to. We will be going
		into this in detail later.
	</p>

	<p>
		Numeric types can be explicitly specified by appending the type to the end of the number (e.g.
		<code>13u32</code>, <code>2u8</code>).
	</p>
</Lesson>
