<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={13}
	title="Sharing Access"
	summary="RefCell</code> is a container data structure commonly held by smart pointers that takes in data and lets us borrow mutable and immutable references to what's inside"
	previous="referencing-counting"
	next="sharing-across-threads"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=use%20std%3A%3Acell%3A%3ARefCell%3B%0A%0Astruct%20Pie%20%7B%0A%20%20%20%20slices%3A%20u8%0A%7D%0A%0Aimpl%20Pie%20%7B%0A%20%20%20%20fn%20eat(%26mut%20self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22tastes%20better%20on%20the%20heap!%22)%3B%0A%20%20%20%20%20%20%20%20self.slices%20-%3D%201%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20RefCell%20validates%20memory%20safety%20at%20runtime%0A%20%20%20%20%2F%2F%20notice%3A%20pie_cell%20is%20not%20mut!%0A%20%20%20%20let%20pie_cell%20%3D%20RefCell%3A%3Anew(Pie%7Bslices%3A8%7D)%3B%0A%20%20%20%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20but%20we%20can%20borrow%20mutable%20references!%0A%20%20%20%20%20%20%20%20let%20mut%20mut_ref_pie%20%3D%20pie_cell.borrow_mut()%3B%0A%20%20%20%20%20%20%20%20mut_ref_pie.eat()%3B%0A%20%20%20%20%20%20%20%20mut_ref_pie.eat()%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%2F%2F%20mut_ref_pie%20is%20dropped%20at%20end%20of%20scope%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20now%20we%20can%20borrow%20immutably%20once%20our%20mutable%20reference%20drops%0A%20%20%20%20%20let%20ref_pie%20%3D%20pie_cell.borrow()%3B%0A%20%20%20%20%20println!(%22%7B%7D%20slices%20left%22%2Cref_pie.slices)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/book/ch15-05-interior-mutability.html https://doc.rust-lang.org/std/cell/struct.RefCell.html"
>
	<p>
		<code>RefCell</code> is a container data structure commonly held by smart pointers that takes in
		data and lets us borrow mutable and immutable references to what's inside. It prevents borrowing
		from being abused by enforcing Rust's memory safety rules at runtime when you ask to borrow the data
		within:
	</p>

	<p>Only one mutable reference OR multiple immutable references, but not both!</p>

	<p>If you violate these rules <code>RefCell</code> will panic.</p>
</Lesson>
