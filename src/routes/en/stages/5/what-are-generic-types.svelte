<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	import ExternalLink from '$components/external-link.svelte';
</script>

<Lesson
	index={2}
	title="What Are Generic Types?"
	previous="./"
	next="representing-nothing"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=%2F%2F%20A%20partially%20defined%20struct%20type%0Astruct%20BagOfHolding%3CT%3E%20%7B%0A%20%20%20%20item%3A%20T%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20Note%3A%20by%20using%20generic%20types%20here%2C%20we%20create%20compile-time%20created%20types.%20%0A%20%20%20%20%2F%2F%20Turbofish%20lets%20us%20be%20explicit.%0A%20%20%20%20let%20i32_bag%20%3D%20BagOfHolding%3A%3A%3Ci32%3E%20%7B%20item%3A%2042%20%7D%3B%0A%20%20%20%20let%20bool_bag%20%3D%20BagOfHolding%3A%3A%3Cbool%3E%20%7B%20item%3A%20true%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Rust%20can%20infer%20types%20for%20generics%20too!%0A%20%20%20%20let%20float_bag%20%3D%20BagOfHolding%20%7B%20item%3A%203.14%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Note%3A%20never%20put%20a%20bag%20of%20holding%20in%20a%20bag%20of%20holding%20in%20real%20life%0A%20%20%20%20let%20bag_in_bag%20%3D%20BagOfHolding%20%7B%0A%20%20%20%20%20%20%20%20item%3A%20BagOfHolding%20%7B%20item%3A%20%22boom!%22%20%7D%2C%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20println!(%0A%20%20%20%20%20%20%20%20%22%7B%7D%20%7B%7D%20%7B%7D%20%7B%7D%22%2C%0A%20%20%20%20%20%20%20%20i32_bag.item%2C%20bool_bag.item%2C%20float_bag.item%2C%20bag_in_bag.item.item%0A%20%20%20%20)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/rust-by-example/generics.html https://doc.rust-lang.org/book/ch10-01-syntax.html"
	tags="generics"
>
	<p>
		Generic types allow us to partially define a <code>struct</code> or <code>enum</code>, enabling
		a compiler to create a fully defined version at compile-time based off our code usage.
	</p>

	<p>
		Rust generally can infer the final type by looking at our instantiation, but if it needs help
		you can always be explicit using the <code>{'::<T>'}</code> operator, also known by the name <ExternalLink
			href="https://turbo.fish/">turbofish</ExternalLink
		> (he's a good friend of mine!).
	</p>
</Lesson>
