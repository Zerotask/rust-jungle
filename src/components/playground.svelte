<script lang="ts">
	export let src: string;
</script>

<code>
	<iframe
		{src}
		frameborder="0"
		title="Rust Playground is an interactive tool to run Rust code"
		aria-label="Rust Playground is an interactive tool to run Rust code"
		sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
	/>
</code>

<style>
	code {
		background: none;
	}
	iframe {
		width: 100%;
		min-height: 600px;
	}

	@media screen and (max-width: 840px) {
		iframe {
			min-height: 450px;
		}
	}
</style>
