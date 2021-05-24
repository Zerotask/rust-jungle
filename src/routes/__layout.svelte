<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import ExternalLink from '$components/external-link.svelte';
	import '../shared.css';
	import Swal from 'sweetalert2';
	import 'sweetalert2/dist/sweetalert2.css';
	import lastLessonStore from '$stores/lastLesson.js';

	onMount(() => {
		// Example: /en/stages/1
		const regex = /\/([a-zA-Z]{2})+\/stages\/+([1-9]{1,2})/;

		// If it's not a lesson page.
		if (!regex.test($page.path)) {
			const lesson = lastLessonStore.get();
			if (lesson) {
				const lessonDate = new Date(lesson.date);
				const currentDate = new Date();
				var diff = currentDate.getTime() - lessonDate.getTime();
				var hourDiff = diff / (1000 * 60 * 60);

				// If last difference to last lesson is at least 2 hours.
				if (hourDiff >= 2) {
					Swal.fire({
						title: 'Do you want to continue your lesson?',
						text: lesson.title,
						confirmButtonText: 'Yes',
						cancelButtonText: 'No',
						showCancelButton: true,
						showCloseButton: true
					}).then((result) => {
						if (result.isConfirmed) {
							goto(lesson.url);
						} else {
							lastLessonStore.reset();
						}
					});
				}
			}
		}
	});
</script>

<header>
	<div class="logo hide-md">
		<a href="/" title="Go to the homepage" aria-label="Go to the homepage">
			<img src="/images/rust-jungle-logo.png" alt="Rust Jungle Logo" width="200" height="66" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<!-- TODO: dynamic links with slugs -->
			<li class:active={$page.path === '/en'}><a sveltekit:prefetch href="/en">Home</a></li>
			<li class:active={$page.path === '/en/stages'}>
				<a
					sveltekit:prefetch
					href="/en/stages"
					title="See an overview of all stages. Each stage will teach you a specific part of Rust"
					aria-label="See an overview of all stages. Each stage will teach you a specific part of Rust"
					>Stages</a
				>
			</li>
			<li class:active={$page.path === '/en/about'}>
				<a
					sveltekit:prefetch
					href="/en/about"
					rel="help"
					title="Read how Rust Jungle works and how to connect to other Rust learners"
					aria-label="Read how Rust Jungle works and how to connect to other Rust learners">About</a
				>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<!-- TODO: add a language selector -->
	<div class="hide-md">
		<span class="language-selection">
			<a href="/en">EN</a> | <a href="/de">DE</a>
		</span>
		<ExternalLink href="https://github.com/Zerotask/rust-jungle">
			<img
				class="github-logo"
				src="/images/github-logo-small.png"
				alt="GitHub"
				width="32"
				height="32"
			/>
		</ExternalLink>
	</div>
</header>

<main class="container">
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	header .language-selection {
		margin-right: 20px;
	}

	.logo {
		margin: 8px;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--primary-color);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--primary-color);
		background-size: contain;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: #fff;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav .active {
		text-decoration: underline;
	}

	a:hover {
		color: #000;
	}

	@media screen and (max-width: 840px) {
		main {
			margin-top: 20px;
		}
		header {
			justify-content: center;
		}
	}
</style>
