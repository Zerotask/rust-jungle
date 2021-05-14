<svelte:head>
	<title>Overview of all stages</title>
</svelte:head>

<!-- TODO: read folder and build it automatically -->
<section>
	<h1>Overview of all stages</h1>

	<h2><a href="stages/1" sveltekit:prefetch>Stage 1: The Basics</a></h2>
	<ul>
		<li><a href="stages/1" sveltekit:prefetch>1.1 Introduction</a></li>
		<li><a href="stages/1/the-rust-playground" sveltekit:prefetch>1.2 The Rust Playground</a></li>
		<li><a href="stages/1/variables" sveltekit:prefetch>1.3 Variables</a></li>
		<li><a href="stages/1/changing-variables" sveltekit:prefetch>1.4 Changing Variables</a></li>
		<li><a href="stages/1/basic-types" sveltekit:prefetch>1.5 Basic Types</a></li>
		<li>
			<a href="stages/1/basic-type-conversion" sveltekit:prefetch>1.6 Basic Type Conversion</a>
		</li>
		<li><a href="stages/1/constants" sveltekit:prefetch>1.7 Constants</a></li>
		<li><a href="stages/1/arrays" sveltekit:prefetch>1.8 Arrays</a></li>
		<li><a href="stages/1/functions" sveltekit:prefetch>1.9 Functions</a></li>
		<li>
			<a href="stages/1/multiple-return-values" sveltekit:prefetch>1.10 Multiple Return Values</a>
		</li>
		<li><a href="stages/1/returning-nothing" sveltekit:prefetch>1.11 Returning Nothing</a></li>
		<li><a href="stages/1/summary" sveltekit:prefetch>1.12 Summary</a></li>
	</ul>
	<h2>Stage 2: Local installation & Rust ecosystem (TODO)</h2>
	<h2><a href="stages/3" sveltekit:prefetch>Stage 3: Basic Control Flow (TODO)</a></h2>
	<ul>
		<li><a href="stages/3" sveltekit:prefetch>3.1 Introduction</a></li>
		<li><a href="stages/3/if-else" sveltekit:prefetch>3.2 if / else</a></li>
		<li><a href="stages/3/loop" sveltekit:prefetch>3.3 loop</a></li>
	</ul>
	<h2><a href="stages/4" sveltekit:prefetch>Stage 4: Basic Data Structure Types (TODO)</a></h2>
	<ul>
		<li><a href="stages/4" sveltekit:prefetch>4.1 Introduction</a></li>
		<li><a href="stages/4/structures" sveltekit:prefetch>4.2 Structures</a></li>
		<li><a href="stages/4/calling-methods" sveltekit:prefetch>4.3 Calling Methods</a></li>
		<li><a href="stages/4/memory" sveltekit:prefetch>4.4 Memory</a></li>
		<li>
			<a href="stages/4/creating-data-in-memory" sveltekit:prefetch>4.5 Creating Data In Memory</a>
		</li>
	</ul>
</section>

<style>
	h2 a {
		text-decoration: none;
	}

	section {
		margin-left: 30px;
	}
</style>
