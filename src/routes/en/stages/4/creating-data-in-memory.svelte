<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index="5"
	title="Creating Data In Memory"
	previous="memory"
	next="tuple-like-structs"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20animal_type%3A%20String%2C%0A%20%20%20%20name%3A%20String%2C%0A%20%20%20%20arms%3A%20i32%2C%0A%20%20%20%20legs%3A%20i32%2C%0A%20%20%20%20weapon%3A%20String%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20SeaCreature's%20data%20is%20on%20stack%0A%20%20%20%20let%20ferris%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20String%20struct%20is%20also%20on%20stack%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20but%20holds%20a%20reference%20to%20data%20on%20heap%0A%20%20%20%20%20%20%20%20animal_type%3A%20String%3A%3Afrom(%22crab%22)%2C%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20arms%3A%202%2C%0A%20%20%20%20%20%20%20%20legs%3A%204%2C%0A%20%20%20%20%20%20%20%20weapon%3A%20String%3A%3Afrom(%22claw%22)%2C%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20let%20sarah%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20animal_type%3A%20String%3A%3Afrom(%22octopus%22)%2C%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Sarah%22)%2C%0A%20%20%20%20%20%20%20%20arms%3A%208%2C%0A%20%20%20%20%20%20%20%20legs%3A%200%2C%0A%20%20%20%20%20%20%20%20weapon%3A%20String%3A%3Afrom(%22brain%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20println!(%0A%20%20%20%20%20%20%20%20%22%7B%7D%20is%20a%20%7B%7D.%20They%20have%20%7B%7D%20arms%2C%20%7B%7D%20legs%2C%20and%20a%20%7B%7D%20weapon%22%2C%0A%20%20%20%20%20%20%20%20ferris.name%2C%20ferris.animal_type%2C%20ferris.arms%2C%20ferris.legs%2C%20ferris.weapon%0A%20%20%20%20)%3B%0A%20%20%20%20println!(%0A%20%20%20%20%20%20%20%20%22%7B%7D%20is%20a%20%7B%7D.%20They%20have%20%7B%7D%20arms%2C%20and%20%7B%7D%20legs.%20They%20have%20no%20weapon..%22%2C%0A%20%20%20%20%20%20%20%20sarah.name%2C%20sarah.animal_type%2C%20sarah.arms%2C%20sarah.legs%0A%20%20%20%20)%3B%0A%7D%0A"
>
	<p>
		When we instantiate a struct in our code our program creates the associated field data side by
		side in memory.
	</p>

	<p>We instantiate by specifying all field values within <code>StructName{'{...}'}</code></p>

	<p>Struct fields are accessed using a dot <code>.</code> operator.</p>

	<p>Memory details of our example:</p>
	<ul>
		<li>
			The text inside the quotes is read only data (e.g. "Ferris"), therefore it is placed in the
			data memory region.
		</li>
		<li>
			The function call <code>String::from</code> creates a struct String that is placed side by
			side with the fields of SeaCreature in the stack. A String represents text that can be changed
			and does this by:
			<ol>
				<li>Creating memory on the heap for the text where it can be modified</li>
				<li>
					Storing a reference to that memory location on the heap and storing it in String struct
					(More on this in future lessons)
				</li>
			</ol>
		</li>
		<li>
			Finally our two friends Ferris and Sarah have data structures that will always have fixed
			locations in our program, so they are placed on the stack.
		</li>
	</ul>
</Lesson>
