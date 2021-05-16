<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 9.10: Heap Allocated Memory"
	previous="familiar-friends"
	next="failable-main-revisited"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20Pie%3B%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20eat(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22tastes%20better%20on%20the%20heap!%22)%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20heap_pie%20%3D%20Box%3A%3Anew(Pie)%3B%0A%20%20%20%20heap_pie.eat()%3B%0A%7D%0A"
>
	<p>
		<code>Box</code> is a smart pointer that lets us move data from the stack to the heap.
	</p>

	<p>
		Dereferencing it lets us use the heap allocated data ergonomically as if it were the original
		type.
	</p>
</Lesson>
