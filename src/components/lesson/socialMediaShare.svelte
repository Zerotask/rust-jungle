<script lang="ts">
	import { page } from '$app/stores';
	import ExternalLink from '$components/externalLink.svelte';

	export let title: string;

	const url = encodeURI(`https://${$page.url.host}${$page.url.pathname}`);

	$: fullTitle = encodeURIComponent(`Rust Jungle - ${title}`);
	$: urlFacebook = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${fullTitle}`;
	$: urlTwitter = `https://twitter.com/intent/tweet?source=${url}&text=${fullTitle}`;
	$: urlReddit = `http://www.reddit.com/submit?url=${url}&title=${fullTitle}`;
	$: urlPocket = `https://getpocket.com/save?url=${url}&title=${fullTitle}`;
	$: urlLinkedin = `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${fullTitle}&summary=&source=${fullTitle}`;
	$: urlEmail = `mailto:?subject=${fullTitle}&body=${url}`;
</script>

<div class="socialMediaShare">
	<!-- Facebook -->
	<ExternalLink href={urlFacebook}>
		<img
			title="Share on Facebook"
			alt="Share on Facebook"
			src="/images/social-media/facebook.png"
			width="32"
			height="32"
		/>
	</ExternalLink>

	<!-- Twitter -->
	<ExternalLink href={urlTwitter}>
		<img
			title="Share on Twitter"
			alt="Share on Twitter"
			src="/images/social-media/twitter.png"
			width="32"
			height="32"
		/>
	</ExternalLink>

	<!-- Reddit -->
	<ExternalLink href={urlReddit}>
		<img
			title="Share on Reddit"
			alt="Share on Reddit"
			src="/images/social-media/reddit.png"
			width="32"
			height="32"
		/>
	</ExternalLink>

	<!-- Pocket -->
	<ExternalLink href={urlPocket}>
		<img
			title="Save on Pocket"
			alt="Save on Pocket"
			src="/images/social-media/pocket.png"
			width="32"
			height="32"
		/>
	</ExternalLink>

	<!-- LinkedIn -->
	<ExternalLink href={urlLinkedin}>
		<img
			title="Share on LinkedIn"
			alt="Share on LinkedIn"
			src="/images/social-media/linkedin.png"
			width="32"
			height="32"
		/>
	</ExternalLink>

	<!-- EMail -->
	<ExternalLink href={urlEmail}>
		<img
			title="Share via email"
			alt="Share via email"
			src="/images/social-media/email.png"
			width="32"
			height="32"
		/>
	</ExternalLink>
</div>

<style lang="postcss">
	.socialMediaShare {
		margin-top: 25px;
		margin-bottom: 20px;
	}
</style>
