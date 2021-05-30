<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={12}
	title="Referencing Counting"
	previous="failable-main-revisited"
	next="sharing-access"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Arc%3A%3ARc%3B%0A%0Astruct%20Pie%3B%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20eat(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22tastes%20better%20on%20the%20heap!%22)%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20heap_pie%20%3D%20Rc%3A%3Anew(Pie)%3B%0A%20%20%20%20let%20heap_pie2%20%3D%20heap_pie.clone()%3B%0A%20%20%20%20let%20heap_pie3%20%3D%20heap_pie2.clone()%3B%0A%0A%20%20%20%20heap_pie3.eat()%3B%0A%20%20%20%20heap_pie2.eat()%3B%0A%20%20%20%20heap_pie.eat()%3B%0A%0A%20%20%20%20%2F%2F%20all%20reference%20count%20smart%20pointers%20are%20dropped%20now%0A%20%20%20%20%2F%2F%20the%20heap%20data%20Pie%20finally%20deallocates%0A%7D%0A"
	links="https://doc.rust-lang.org/book/ch15-04-rc.html https://doc.rust-lang.org/alloc/rc/"
>
	<p>
		<code>Rc</code> is a smart pointer that moves data from the stack onto the heap. It allows us to
		clone other <code>Rc</code> smart pointers that all have the ability to immutably borrow the data
		that was put on the heap.
	</p>

	<p>Only when the last smart pointer is dropped does the data on the heap become deallocated.</p>
</Lesson>
