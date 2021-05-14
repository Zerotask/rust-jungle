<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson title="Stage 3.4: Memory" previous="calling-methods" next="creating-data-in-memory">
	<p>Rust programs have 3 memory regions where data is stored:</p>
	<ul>
		<li>
			<b>data memory</b> - For data that is fixed in size and static (i.e. always available through life
			of program). Consider the text in your program (e.g. "Hello World!"): This text's bytes are only
			ever read from one place and therefore can be stored in this region. Compilers make lots of optimizations
			with this kind of data, and they are generally considered very fast to use since locations are
			known and fixed.
		</li>
		<li>
			<b>stack memory</b> - For data that is declared as variables within a function. The location of
			this memory never changes for the duration of a function call; because of this compilers can optimize
			code so stack data is very fast to access.
		</li>
		<li>
			<b>heap memory</b> - For data that is created while the application is running. Data in this region
			may be added, moved, removed, resized, etc. Because of its dynamic nature it's generally considered
			slower to use, but it allows for much more creative usages of memory. When data is added to this
			region we call it an allocation. When data is removed from this section we call it a deallocation.
		</li>
	</ul>
</Lesson>
