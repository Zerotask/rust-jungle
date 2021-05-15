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

	<h2>
		<a href="stages/2" sveltekit:prefetch>Stage 2: Local installation & Rust ecosystem (TODO)</a>
	</h2>
	<ul>
		<li><a href="stages/2" sveltekit:prefetch>2.1 Introduction</a></li>
		<li><a href="stages/2/installation" sveltekit:prefetch>2.2 Installation</a></li>
		<li><a href="stages/2/rustup" sveltekit:prefetch>2.3 rustup</a></li>
		<li><a href="stages/2/cargo" sveltekit:prefetch>2.4 cargo</a></li>
		<li>
			<a href="stages/2/managing-dependencies-with-cargo" sveltekit:prefetch
				>2.5 Managing Dependencies With cargo</a
			>
		</li>
		<li>
			<a href="stages/2/cargo-subcommands" sveltekit:prefetch>2.6 cargo Subcommands (TODO)</a>
		</li>
		<li>
			<a href="stages/2/setup-visual-studio-code" sveltekit:prefetch>2.7 Setup Visual Studio Code</a
			>
		</li>
		<li><a href="stages/2/summary" sveltekit:prefetch>2.8 Summary (TODO)</a></li>
	</ul>

	<h2><a href="stages/3" sveltekit:prefetch>Stage 3: Basic Control Flow</a></h2>
	<ul>
		<li><a href="stages/3" sveltekit:prefetch>3.1 Introduction</a></li>
		<li><a href="stages/3/if-else" sveltekit:prefetch>3.2 if / else</a></li>
		<li><a href="stages/3/loop" sveltekit:prefetch>3.3 loop</a></li>
		<li>
			<a href="stages/3/returning-values-from-loop" sveltekit:prefetch
				>3.4 Returning Values From loop</a
			>
		</li>
		<li><a href="stages/3/while" sveltekit:prefetch>3.5 while</a></li>
		<li><a href="stages/3/for" sveltekit:prefetch>3.6 for</a></li>
		<li><a href="stages/3/match" sveltekit:prefetch>3.7 match</a></li>
		<li>
			<a href="stages/3/returning-values-from-block-expressions" sveltekit:prefetch
				>3.8 Returning Values From Block Expressions</a
			>
		</li>
		<li><a href="stages/3/summary" sveltekit:prefetch>3.9 Summary</a></li>
	</ul>

	<h2><a href="stages/4" sveltekit:prefetch>Stage 4: Basic Data Structure Types (TODO)</a></h2>
	<ul>
		<li><a href="stages/4" sveltekit:prefetch>4.1 Introduction</a></li>
		<li><a href="stages/4/structures" sveltekit:prefetch>4.2 Structures</a></li>
		<li><a href="stages/4/calling-methods" sveltekit:prefetch>4.3 Calling Methods</a></li>
		<li><a href="stages/4/memory" sveltekit:prefetch>4.4 Memory</a></li>
		<li><a href="stages/4/memory" sveltekit:prefetch>4.4 Memory</a></li>
		<li>
			<a href="stages/4/creating-data-in-memory" sveltekit:prefetch>4.5 Creating Data In Memory</a>
		</li>
		<li><a href="stages/4/tuple-like-structs" sveltekit:prefetch>4.6 Tuple-like Structs</a></li>
		<li><a href="stages/4/unit-like-structs" sveltekit:prefetch>4.7 Unit-like Structs</a></li>
		<li><a href="stages/4/enums" sveltekit:prefetch>4.8 Enums</a></li>
		<li><a href="stages/4/enums-with-data" sveltekit:prefetch>4.9 Enums With Data</a></li>
		<li><a href="stages/4/summary" sveltekit:prefetch>4.10 Summary</a></li>
	</ul>
</section>

<style>
	h2 a {
		text-decoration: none;
	}

	h2:not(:first-of-type) {
		border-top: 1px solid;
		padding-top: 15px;
	}

	section {
		margin-left: 30px;
	}

	a:hover {
		text-decoration: none;
		color: var(--primary-color);
		font-weight: bold;
	}
</style>
