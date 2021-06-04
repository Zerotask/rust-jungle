<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={10}
	title="Internal Module Referencing"
	summary="Rust has several keywords you can use in your use path to quickly get ahold of the module you want"
	tags="modules"
	previous="inline-modules"
	next="exporting"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=mod%20foo%20%7B%0D%0A%20%20%20%20fn%20hello_world()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22Hello%20world%22)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20pub%20mod%20nested%20%7B%0D%0A%20%20%20%20%20%20%20%20pub%20fn%20bar()%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20super%3A%3Ahello_world()%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20foo%3A%3Anested%3A%3Abar()%3B%0D%0A%20%20%20%20%2F%2F%20but%20you%20can't%20access%20foo%3A%3Ahello_world()%3B%20from%20here!%0D%0A%7D%0D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/mod/super.html"
>
	<p>
		Rust has several keywords you can use in your use path to quickly get ahold of the module you
		want:
	</p>
	<ul>
		<li><code>crate</code> - the root module of your crate</li>
		<li><code>super</code> - the parent module of your current module</li>
		<li><code>self</code> - the current module</li>
	</ul>
</Lesson>
