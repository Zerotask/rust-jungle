<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={8}
	title="Enums"
	summary="nums allow you to create a new type that can have a value of several tagged elements"
	tags="enums"
	previous="unit-like-structs"
	next="enums-with-data"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=%23!%5Ballow(dead_code)%5D%20%2F%2F%20this%20line%20prevents%20compiler%20warnings%0A%0Aenum%20Species%20%7B%0A%20%20%20%20Crab%2C%0A%20%20%20%20Octopus%2C%0A%20%20%20%20Fish%2C%0A%20%20%20%20Clam%0A%7D%0A%0Astruct%20SeaCreature%20%7B%0A%20%20%20%20species%3A%20Species%2C%0A%20%20%20%20name%3A%20String%2C%0A%20%20%20%20arms%3A%20i32%2C%0A%20%20%20%20legs%3A%20i32%2C%0A%20%20%20%20weapon%3A%20String%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20ferris%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20species%3A%20Species%3A%3ACrab%2C%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20arms%3A%202%2C%0A%20%20%20%20%20%20%20%20legs%3A%204%2C%0A%20%20%20%20%20%20%20%20weapon%3A%20String%3A%3Afrom(%22claw%22)%2C%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20match%20ferris.species%20%7B%0A%20%20%20%20%20%20%20%20Species%3A%3ACrab%20%3D%3E%20println!(%22%7B%7D%20is%20a%20crab%22%2Cferris.name)%2C%0A%20%20%20%20%20%20%20%20Species%3A%3AOctopus%20%3D%3E%20println!(%22%7B%7D%20is%20a%20octopus%22%2Cferris.name)%2C%0A%20%20%20%20%20%20%20%20Species%3A%3AFish%20%3D%3E%20println!(%22%7B%7D%20is%20a%20fish%22%2Cferris.name)%2C%0A%20%20%20%20%20%20%20%20Species%3A%3AClam%20%3D%3E%20println!(%22%7B%7D%20is%20a%20clam%22%2Cferris.name)%2C%0A%20%20%20%20%7D%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/custom_types/enum.html https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html"
>
	<p>
		Enums allow you to create a new type that can have a value of several tagged elements using the <code
			>enum</code
		> keyword.
	</p>

	<p>
		<code>match</code> helps ensure exhaustive handling of all possible enum values making it a powerful
		tool in ensuring quality code.
	</p>
</Lesson>
