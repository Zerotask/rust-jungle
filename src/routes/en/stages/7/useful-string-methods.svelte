<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={15}
	title="Useful String Methods"
	previous="converting-strings"
	next="regular-expressions"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%7B%0A%20%20%20%20let%20mut%20greet%20%3D%20String%3A%3Afrom(%22Hello%20world%22)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20greet)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20greet.replace(%22world%22%2C%20%22Ferris%22))%3B%0A%20%20%20%20println!(%22Length%20of%20greet%3A%20%7B%7D%22%2C%20greet.len())%3B%0A%20%20%20%20println!(%22the%20last%20char%20of%20greet%3A%20%7B%3A%3F%7D%22%2C%20greet.pop())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20String%3A%3Afrom(%22%20hello%20%22).trim())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20String%3A%3Afrom(%22hello%22).to_uppercase())%3B%0A%20%20%20%20println!(%22Substring%20first%203%20chars%3A%20%7B%7D%22%2C%20%26%22foobar%22%5B..3%5D)%3B%0A%20%20%20%20println!(%22Substring%20starting%20after%203%20chars%3A%20%7B%7D%22%2C%20%26%22foobar%22%5B3..%5D)%3B%0A%20%20%20%20%0A%20%20%20%20if%20!greet.is_empty()%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20String%3A%3Afrom(%22HELLO%20FERRIS!%22).to_lowercase())%3B%0A%20%20%20%20%7D%0A%7D%0A"
	links="https://doc.rust-lang.org/std/string/struct.String.html#implementations"
>
	<p>Ferris will show you some useful string methods:</p>
	<ul>
		<li><code>"".replace(from, to)</code> - to replace a part of a string</li>
		<li><code>"".len()</code> - to get the length of a string</li>
		<li><code>"".pop()</code> - remove the last character and returns it</li>
		<li><code>"".push_str()</code> - append a string at the end</li>
		<li>
			<code>"".trim()</code> - remove leading and trailing whitespaces. There are also more specific
			trim methods
		</li>
		<li><code>"".to_lowercase()</code> - transform all letters to lowercase</li>
		<li><code>"".to_uppercase()</code> - transform all letters to uppercase</li>
		<li><code>"".is_empty()</code> - returns true if the string is empty (length of zero)</li>
		<li>
			<code>&""[M..N]</code> - substrings are done with the index operator <code>[M..N]</code>
		</li>
	</ul>
</Lesson>
