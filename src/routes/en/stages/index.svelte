<svelte:head>
	<title>Overview of all stages</title>
</svelte:head>

<!-- TODO: read folder and build it automatically -->
<section>
	<h1>Overview of all stages</h1>

	<h2><a href="stages/1" sveltekit:prefetch id="the-basics">Stage 1: The Basics</a></h2>
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
		<li><a href="stages/1/macros" sveltekit:prefetch>1.12 Macros</a></li>
		<li><a href="stages/1/compiler-messages" sveltekit:prefetch>1.13 Compiler Messages</a></li>
		<li><a href="stages/1/summary" sveltekit:prefetch>1.14 Summary</a></li>
	</ul>

	<h2>
		<a href="stages/2" sveltekit:prefetch id="rust-installation-and-local-development"
			>Stage 2: Rust installation and local development</a
		>
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
			<a href="stages/2/cargo-subcommands" sveltekit:prefetch>2.6 cargo Subcommands</a>
		</li>
		<li>
			<a href="stages/2/setup-visual-studio-code" sveltekit:prefetch>2.7 Setup Visual Studio Code</a
			>
		</li>
		<li>
			<a href="stages/2/writing-a-hello-world-program" sveltekit:prefetch
				>2.8 Writing A Hello World Program</a
			>
		</li>
		<li>
			<a href="stages/2/reading-command-line-arguments" sveltekit:prefetch
				>2.9 Reading Command Line Arguments</a
			>
		</li>
		<li>
			<a href="stages/2/how-to-test-functions" sveltekit:prefetch>2.10 How to test functions</a>
		</li>
		<li><a href="stages/2/summary" sveltekit:prefetch>2.11 Summary</a></li>
	</ul>

	<h2>
		<a href="stages/3" sveltekit:prefetch id="basic-control-flow">Stage 3: Basic Control Flow</a>
	</h2>
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

	<h2>
		<a href="stages/4" sveltekit:prefetch id="basic-data-structure-types"
			>Stage 4: Basic Data Structure Types</a
		>
	</h2>
	<ul>
		<li><a href="stages/4" sveltekit:prefetch>4.1 Introduction</a></li>
		<li><a href="stages/4/structures" sveltekit:prefetch>4.2 Structures</a></li>
		<li><a href="stages/4/calling-methods" sveltekit:prefetch>4.3 Calling Methods</a></li>
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

	<h2><a href="stages/5" sveltekit:prefetch id="generic-types">Stage 5: Generic Types</a></h2>
	<ul>
		<li><a href="stages/5" sveltekit:prefetch>5.1 Introduction</a></li>
		<li>
			<a href="stages/5/what-are-generic-types" sveltekit:prefetch>5.2 What Are Generic Types</a>
		</li>
		<li>
			<a href="stages/5/representing-nothing" sveltekit:prefetch>5.3 Representing Nothing</a>
		</li>
		<li><a href="stages/5/option" sveltekit:prefetch>5.4 Option</a></li>
		<li><a href="stages/5/result" sveltekit:prefetch>5.5 Result</a></li>
		<li><a href="stages/5/failable-main" sveltekit:prefetch>5.6 Failable Main</a></li>
		<li><a href="stages/5/error-handling" sveltekit:prefetch>5.7 Error Handling</a></li>
		<li>
			<a href="stages/5/ugly-option-result-handling" sveltekit:prefetch
				>5.8 Ugly Option / Result Handling</a
			>
		</li>
		<li><a href="stages/5/vectors" sveltekit:prefetch>5.9 Vectors</a></li>
		<li><a href="stages/5/summary" sveltekit:prefetch>5.10 Summary</a></li>
	</ul>

	<h2>
		<a href="stages/6" sveltekit:prefetch id="ownership-and-borrowing-data"
			>Stage 6: Ownership & Borrowing Data</a
		>
	</h2>
	<ul>
		<li><a href="stages/6" sveltekit:prefetch>6.1 Introduction</a></li>
		<li><a href="stages/6/ownership" sveltekit:prefetch>6.2 Ownership</a></li>
		<li>
			<a href="stages/6/scope-based-resource-management" sveltekit:prefetch
				>6.3 Scope-based Resource Management</a
			>
		</li>
		<li>
			<a href="stages/6/dropping-is-hierarchical" sveltekit:prefetch>6.4 Dropping Is Hierarchical</a
			>
		</li>
		<li><a href="stages/6/moving-ownership" sveltekit:prefetch>6.5 Moving Ownership</a></li>
		<li><a href="stages/6/returning-ownership" sveltekit:prefetch>6.6 Returning Ownership</a></li>
		<li>
			<a href="stages/6/borrowing-ownership-with-references" sveltekit:prefetch
				>6.7 Borrowing Ownership With References</a
			>
		</li>
		<li>
			<a href="stages/6/borrowing-mutable-ownership-with-references" sveltekit:prefetch
				>6.8 Borrowing Mutable Ownership With References</a
			>
		</li>
		<li><a href="stages/6/dereferencing" sveltekit:prefetch>6.9 Dereferencing</a></li>
		<li>
			<a href="stages/6/passing-around-borrowed-data" sveltekit:prefetch
				>6.10 Passing Around Borrowed Data</a
			>
		</li>
		<li>
			<a href="stages/6/references-of-references" sveltekit:prefetch
				>6.11 References Of References</a
			>
		</li>
		<li><a href="stages/6/explicit-lifetimes" sveltekit:prefetch>6.12 Explicit Lifetimes</a></li>
		<li><a href="stages/6/multiple-lifetimes" sveltekit:prefetch>6.13 Multiple Lifetimes</a></li>
		<li><a href="stages/6/static-lifetimes" sveltekit:prefetch>6.14 Static Lifetimes</a></li>
		<li>
			<a href="stages/6/lifetimes-in-data-types" sveltekit:prefetch>6.15 Lifetimes In Data Types</a>
		</li>
		<li><a href="stages/6/summary" sveltekit:prefetch>6.16 Summary</a></li>
	</ul>

	<h2><a href="stages/7" sveltekit:prefetch id="text">Stage 7: Text</a></h2>
	<ul>
		<li><a href="stages/7" sveltekit:prefetch>7.1 Introduction</a></li>
		<li><a href="stages/7/string-literals" sveltekit:prefetch>7.2 String Literals</a></li>
		<li><a href="stages/7/what-is-utf-8" sveltekit:prefetch>7.3 What Is UTF-8?</a></li>
		<li><a href="stages/7/escaping-characters" sveltekit:prefetch>7.4 Escaping Characters</a></li>
		<li>
			<a href="stages/7/multi-line-string-literals" sveltekit:prefetch
				>7.5 Multi-line String Literals</a
			>
		</li>
		<li><a href="stages/7/raw-string-literals" sveltekit:prefetch>7.6 Raw String Literals</a></li>
		<li>
			<a href="stages/7/string-literals-from-files" sveltekit:prefetch
				>7.7 String Literals From Files</a
			>
		</li>
		<li><a href="stages/7/string-slice" sveltekit:prefetch>7.8 String Slice</a></li>
		<li><a href="stages/7/chars" sveltekit:prefetch>7.9 Chars</a></li>
		<li><a href="stages/7/string" sveltekit:prefetch>7.10 String</a></li>
		<li>
			<a href="stages/7/text-as-function-parameters" sveltekit:prefetch
				>7.11 Text As Function Parameters</a
			>
		</li>
		<li><a href="stages/7/building-strings" sveltekit:prefetch>7.12 Building Strings</a></li>
		<li><a href="stages/7/formatting-strings" sveltekit:prefetch>7.13 Formatting Strings</a></li>
		<li><a href="stages/7/converting-strings" sveltekit:prefetch>7.14 Converting Strings</a></li>
		<li>
			<a href="stages/7/useful-string-methods" sveltekit:prefetch>7.15 Useful String Methods</a>
		</li>
		<li><a href="stages/7/summary" sveltekit:prefetch>7.16 Summary</a></li>
	</ul>

	<h2>
		<a href="stages/8" sveltekit:prefetch id="object-oriented-programming"
			>Stage 8: Object Oriented Programming (OOP)</a
		>
	</h2>
	<ul>
		<li><a href="stages/8" sveltekit:prefetch>8.1 Introduction</a></li>
		<li>
			<a href="stages/8/what-is-object-oriented-programming" sveltekit:prefetch
				>8.2 What Is Object Oriented Programming (OOP)?</a
			>
		</li>
		<li>
			<a href="stages/8/rust-is-not-oop" sveltekit:prefetch>8.3 Rust Is Not OOP</a>
		</li>
		<li>
			<a href="stages/8/encapsulation-with-methods" sveltekit:prefetch
				>8.4 Encapsulation With Methods</a
			>
		</li>
		<li>
			<a href="stages/8/abstraction-with-selective-exposure" sveltekit:prefetch
				>8.5 Abstraction With Selective Exposure</a
			>
		</li>
		<li>
			<a href="stages/8/polymorphism-with-traits" sveltekit:prefetch>8.6 Polymorphism With Traits</a
			>
		</li>
		<li>
			<a href="stages/8/implemented-methods-on-traits" sveltekit:prefetch
				>8.7 Implemented Methods On Traits</a
			>
		</li>
		<li>
			<a href="stages/8/trait-inheritance" sveltekit:prefetch>8.8 Trait Inheritance</a>
		</li>
		<li>
			<a href="stages/8/dynamic-vs-static-dispatch" sveltekit:prefetch
				>8.9 Dynamic vs Static Dispatch</a
			>
		</li>
		<li>
			<a href="stages/8/trait-objects" sveltekit:prefetch>8.10 Trait Objects</a>
		</li>
		<li>
			<a href="stages/8/handling-unsized-data" sveltekit:prefetch>8.11 Handling Unsized Data</a>
		</li>
		<li>
			<a href="stages/8/generic-functions" sveltekit:prefetch>8.12 Generic Functions</a>
		</li>
		<li>
			<a href="stages/8/generic-functions-shorthand" sveltekit:prefetch
				>8.13 Generic Functions Shorthand</a
			>
		</li>
		<li>
			<a href="stages/8/box" sveltekit:prefetch>8.14 Box</a>
		</li>
		<li>
			<a href="stages/8/generic-structs-revisited" sveltekit:prefetch
				>8.15 Generic Structs Revisited</a
			>
		</li>
		<li>
			<a href="stages/8/summary" sveltekit:prefetch>8.16 Summary</a>
		</li>
	</ul>

	<h2>
		<a href="stages/9" id="smart-pointers">Stage 9: Smart Pointers</a>
	</h2>
	<ul>
		<li><a href="stages/9">9.1 Introduction</a></li>
		<li><a href="stages/9/references-revisited">9.2 References Revisited</a></li>
		<li><a href="stages/9/raw-pointers">9.3 Raw Pointers</a></li>
		<li><a href="stages/9/dereferencing-revisited">9.4 Dereferencing Revisited</a></li>
		<li><a href="stages/9/the-dereference-operator">9.5 The Dereference Operator *</a></li>
		<li><a href="stages/9/the-dot-operator">9.6 The Dot Operator .</a></li>
		<li><a href="stages/9/smart-pointers">9.7 Smart Pointers</a></li>
		<li><a href="stages/9/smart-unsafe-code">9.8 Smart Unsafe Code</a></li>
		<li><a href="stages/9/familiar-friends">9.9 Familiar Friends</a></li>
		<li><a href="stages/9/heap-allocated-memory">9.10 Heap Allocated Memory</a></li>
		<li><a href="stages/9/failable-main-revisited">9.11 Failable Main Revisted</a></li>
		<li><a href="stages/9/referencing-counting">9.12 Referencing Counting</a></li>
		<li><a href="stages/9/sharing-access">9.13 Sharing Access</a></li>
		<li><a href="stages/9/sharing-across-threads">9.14 Sharing Across Threads</a></li>
		<li><a href="stages/9/combining-smart-pointers">9.15 Combining Smart Pointers</a></li>
		<li><a href="stages/9/summary">9.16 Summary</a></li>
	</ul>

	<h2>
		<a href="stages/10" id="project-organization-and-structure"
			>Stage 10: Project Organization and Stucture</a
		>
	</h2>
	<ul>
		<li><a href="stages/10">10.1 Introduction</a></li>
		<li><a href="stages/10/modules">10.2 Modules</a></li>
		<li><a href="stages/10/writing-a-program">10.3 Writing A Program</a></li>
		<li><a href="stages/10/writing-a-library">10.4 Writing A Library</a></li>
		<li>
			<a href="stages/10/referencing-other-modules-and-crates"
				>10.5 Referencing Other Modules And Crates</a
			>
		</li>
		<li><a href="stages/10/referencing-multiple-items">10.6 Referencing Multiple Items</a></li>
		<li><a href="stages/10/creating-modules">10.7 Creating Modules</a></li>
		<li><a href="stages/10/module-hierarchy">10.8 Module Hierarchy</a></li>
		<li><a href="stages/10/inline-modules">10.9 Inline Modules</a></li>
		<li><a href="stages/10/internal-module-referencing">10.10 Internal Module Referencing</a></li>
		<li><a href="stages/10/exporting">10.11 Exporting</a></li>
		<li><a href="stages/10/struct-visibility">10.12 struct Visibility</a></li>
		<li><a href="stages/10/prelude">10.13 Prelude</a></li>
		<li><a href="stages/10/your-own-prelude">10.14 Your Own Prelude</a></li>
		<li><a href="stages/10/summary">10.15 Summary</a></li>
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
