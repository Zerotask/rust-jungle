<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson title="Stage 6.16: Summary" previous="lifetimes-in-data-types" next="../7" isSummary="true">
	<p>
		Whew, congrats for making it through! I know it's a lot to take in, but you are well under way
		to becoming a Rustacean. Hopefully it's clear how Rust as a language aims to solve many of these
		common challenges in systems programming:
	</p>
	<ul>
		<li>Unintentional modification of resources</li>
		<li>Forgetting to deconstruct resources</li>
		<li>Resources accidentally being deconstructed twice</li>
		<li>Using resources after they have been deconstructed</li>
		<li>Data races caused by writing to resources while others are reading from resources</li>
		<li>Seeing clearly areas of the code where the compiler can’t make guarantees</li>
	</ul>

	<p>In the next chapter we'll apply some of this knowledge as we look at how Rust handles text.</p>
</Lesson>
