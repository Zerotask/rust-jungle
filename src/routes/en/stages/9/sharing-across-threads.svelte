<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/std/sync/struct.Mutex.html',
		'https://doc.rust-lang.org/book/ch16-03-shared-state.html',
		'https://doc.rust-lang.org/rust-by-example/std/arc.html'
	];
</script>

<Lesson
	index={14}
	title="Sharing Across Threads"
	previous="sharing-access"
	next="combining-smart-pointers"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Async%3A%3AMutex%3B%0A%0Astruct%20Pie%3B%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20eat(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22only%20I%20eat%20the%20pie%20right%20now!%22)%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20mutex_pie%20%3D%20Mutex%3A%3Anew(Pie)%3B%0A%20%20%20%20%2F%2F%20let's%20borrow%20a%20locked%20immutable%20reference%20of%20pie%0A%20%20%20%20%2F%2F%20we%20have%20to%20unwrap%20the%20result%20of%20a%20lock%0A%20%20%20%20%2F%2F%20because%20it%20might%20fail%0A%20%20%20%20let%20ref_pie%20%3D%20mutex_pie.lock().unwrap()%3B%0A%20%20%20%20ref_pie.eat()%3B%0A%20%20%20%20%2F%2F%20locked%20reference%20drops%20here%2C%20and%20mutex%20protected%20value%20can%20be%20used%20by%20someone%20else%0A%7D%0A"
	{links}
>
	<p>
		<code>Mutex</code> (abbreviation for <i>mutual exclusion</i>) is a container data structure
		commonly held by smart pointers that takes in data and lets us borrow mutable and immutable
		references to the data within. This prevents borrowing from being abused by having the operating
		system restrict only one CPU thread at time to have access to the data, blocking other threads
		until that original thread is done with its locked borrow.
	</p>

	<p>
		Multithreading is beyond the scope of Rust Jungle, but <code>Mutex</code> is a fundamental part of
		orchestrating multiple CPU threads accessing the same data.
	</p>

	<p>
		There is a special smart pointer <code>Arc</code> which is identical to <code>Rc</code> except
		uses thread-safe incrementing of reference counts. It's often used to have many references to
		the same
		<code>Mutex</code>.
	</p>
</Lesson>
