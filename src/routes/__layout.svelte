<script lang="ts">
	import { page } from '$app/stores';
	import '../shared.css';
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src="/rust-jungle-logo.png" alt="Rust Jungle Logo" width="200" height="66" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<!-- TODO: dynamic links with slugs -->
			<li class:active={$page.path === '/en'}><a sveltekit:prefetch href="/en">Home</a></li>
			<li class:active={$page.path === '/en/about'}>
				<a sveltekit:prefetch href="/en/stages">Stages</a>
			</li>
			<li class:active={$page.path === '/en/todos'}>
				<a sveltekit:prefetch href="/en/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<!-- TODO: add a language selector -->
	<div class="corner">
		<a
			href="https://github.com/Zerotask/rust-jungle"
			rel="external noreferrer"
			title="Open project on GitHub"
		>
			<img src="/github-logo-small.png" alt="GitHub" />
		</a>
	</div>
</header>

<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.logo {
		margin: 8px;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
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

	a:hover {
		color: var(--text-color-hover);
	}
	main {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20px;
	}
</style>
