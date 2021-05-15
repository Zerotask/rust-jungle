<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson title="Stage 1.13: Summary" previous="returning-nothing" next="../2" isSummary="true">
	<p>
		Nice job so far! The basics of Rust aren't so bad, right? We're getting a peek into how the Rust
		compiler thinks. As a system programming language it cares a lot about the size of values in
		memory, whether things can be modified or not, and making sure your math is what you want it to
		be. Next up we'll be looking at some old friends: <code>if</code> tests and <code>for</code> loops.
	</p>

	<p>More Resources:</p>
	<ul>
		<li>
			<a href="https://www.youtube.com/watch?v=n5TRBkbystY" rel="external noreferrer"
				>Youtube: Rust Cast - A deeper dive on Rust's primitive number types</a
			>
		</li>
		<li>
			<a
				href="https://doc.rust-lang.org/1.30.0/book/2018-edition/ch03-02-data-types.html"
				rel="external noreferrer"
				>Website: Rust Book 2018 - A deeper description on basic data types</a
			>
		</li>
		<li>
			<a href="https://cheats.rs/#basic-types" rel="external noreferrer"
				>Website: Rust Cheat Sheet - Data Types</a
			>
		</li>
	</ul>
</Lesson>
