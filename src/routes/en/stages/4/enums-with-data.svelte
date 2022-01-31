<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={9}
	title="Enums With Data"
	tags="enums"
	previous="enums"
	next="summary"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%23!%5Ballow(dead_code)%5D%20%2F%2F%20this%20line%20prevents%20compiler%20warnings%0A%0Aenum%20Species%20%7B%20Crab%2C%20Octopus%2C%20Fish%2C%20Clam%20%7D%0Aenum%20PoisonType%20%7B%20Acidic%2C%20Painful%2C%20Lethal%20%7D%0Aenum%20Size%20%7B%20Big%2C%20Small%20%7D%0Aenum%20Weapon%20%7B%0A%20%20%20%20Claw(i32%2C%20Size)%2C%0A%20%20%20%20Poison(PoisonType)%2C%0A%20%20%20%20None%0A%7D%0A%0Astruct%20SeaCreature%20%7B%0A%20%20%20%20species%3A%20Species%2C%0A%20%20%20%20name%3A%20String%2C%0A%20%20%20%20arms%3A%20i32%2C%0A%20%20%20%20legs%3A%20i32%2C%0A%20%20%20%20weapon%3A%20Weapon%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20SeaCreature's%20data%20is%20on%20stack%0A%20%20%20%20let%20ferris%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20String%20struct%20is%20also%20on%20stack%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20but%20holds%20a%20reference%20to%20data%20on%20heap%0A%20%20%20%20%20%20%20%20species%3A%20Species%3A%3ACrab%2C%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20arms%3A%202%2C%0A%20%20%20%20%20%20%20%20legs%3A%204%2C%0A%20%20%20%20%20%20%20%20weapon%3A%20Weapon%3A%3AClaw(2%2C%20Size%3A%3ASmall)%2C%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20match%20ferris.species%20%7B%0A%20%20%20%20%20%20%20%20Species%3A%3ACrab%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20match%20ferris.weapon%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Weapon%3A%3AClaw(num_claws%2Csize)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20size_description%20%3D%20match%20size%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Size%3A%3ABig%20%3D%3E%20%22big%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Size%3A%3ASmall%20%3D%3E%20%22small%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20println!(%22ferris%20is%20a%20crab%20with%20%7B%7D%20%7B%7D%20claws%22%2C%20num_claws%2C%20size_description)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_%20%3D%3E%20println!(%22ferris%20is%20a%20crab%20with%20some%20other%20weapon%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20_%20%3D%3E%20println!(%22ferris%20is%20some%20other%20animal%22)%2C%0A%20%20%20%20%7D%0A%7D"
>
	<p>
		<code>enum</code> elements can also have one or more data types allowing them to behave like union
		from C.
	</p>

	<p>
		When an <code>enum</code> is pattern matched using <code>match</code>, you can bind a variable
		name to each data value.
	</p>

	<p>Memory details of <code>enum</code>:</p>
	<ul>
		<li>
			An enum data value will have a memory size equal to its largest element. This allows for all
			potential values to fit in the same space of memory.
		</li>
		<li>
			In addition to element data types (if any), each element also has a numeric value that
			represents which tag it is.
		</li>
	</ul>

	<p>Other details:</p>
	<ul>
		<li>Rust's <code>enum</code> is something also known as a tagged union.</li>
		<li>
			The combining of types to make a new type is what people mean when they say Rust has <i
				>algebraic types</i
			>.
		</li>
	</ul>
</Lesson>
