<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
	import ExternalLink from '$components/externalLink.svelte';
</script>

<Lesson index={17} previous="rust-editions">
	<p>
		You now have a few tricks up your sleeve when it comes to creating Rust applications and
		libraries ready for the world. Don't worry about remembering it all. As your library grows and
		is used by other people, you'll find what works best at each milestone.
	</p>

	<p>
		If you want to practice your new Rust skills, I can recommend you <ExternalLink
			href="https://github.com/rust-lang/rustlings">Rustlings</ExternalLink
		>. This is an interactive tutorial by the Rust team.
	</p>
</Lesson>
