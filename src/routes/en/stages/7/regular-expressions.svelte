<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={16}
	title="Regular Expressions"
	previous="useful-string-methods"
	next="summary"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20regex%3A%3ARegex%3B%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20domain_regex%20%3D%20Regex%3A%3Anew(r%22%5E%5Ba-z0-9%5D%2B(%5B%5C-%5C.%5D%7B1%7D%5Ba-z0-9%5D%2B)*%5C.%5Ba-z%5D%7B2%2C6%7D%24%22).unwrap()%3B%0A%20%20%20%20let%20domain%20%3D%20%22abc%2Fcom%22%3B%0A%20%20%20%20println!(%22is%20%7B%7D%20a%20valid%20domain%3F%20%7B%7D%22%2C%20domain%2C%20domain_regex.is_match(domain))%3B%0A%0A%20%20%20%20let%20email_regex%20%3D%20Regex%3A%3Anew(r%22%5E(%5Ba-z0-9_%2B%5D(%5Ba-z0-9_%2B.%5D*%5Ba-z0-9_%2B%5D)%3F)%40(%5Ba-z0-9%5D%2B(%5B%5C-%5C.%5D%7B1%7D%5Ba-z0-9%5D%2B)*%5C.%5Ba-z%5D%7B2%2C6%7D)%22).unwrap()%3B%0A%20%20%20%20let%20email%20%3D%20%22test%40test.de%22%3B%0A%20%20%20%20println!(%22is%20%7B%7D%20a%20valid%20email%3F%20%7B%7D%22%2C%20email%2C%20email_regex.is_match(email))%3B%0A%7D%0A"
	furtherInformationUrls="https://docs.rs/regex/1.5.4/regex/"
>
	<p>Regular Expressions (regex) is a common tool to check if text meets a predefined criteria.</p>

	<p>Common use cases for it are email, number or domain verifications.</p>

	<p>Rust provides the module <code>regex::Regex</code> to deal with regex.</p>

	<p>
		But before you can start, you have to add <code>regex = "1"</code> to your <i>Cargo.toml</i> dependencies
	</p>

	<p>A regex check consists of 3 parts:</p>
	<ul>
		<li>A pattern which you define with <code>Regex::new()</code></li>
		<li>A string to check</li>
		<li>The actual check with <code>is_match()</code>, which will return a <code>bool</code></li>
	</ul>
</Lesson>
