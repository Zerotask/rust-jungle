<script lang="ts">
	import Lesson from '$components/lesson.svelte';
	const links: string[] = [
		'https://doc.rust-lang.org/std/option/enum.Option.html',
		'https://doc.rust-lang.org/rust-by-example/std/option.html'
	];
</script>

<Lesson
	index={4}
	title="Option"
	previous="representing-nothing"
	next="result"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=%2F%2F%20A%20partially%20defined%20struct%20type%0Astruct%20BagOfHolding%3CT%3E%20%7B%0A%20%20%20%20%2F%2F%20Our%20parameter%20type%20T%20can%20be%20handed%20to%20others%0A%20%20%20%20item%3A%20Option%3CT%3E%2C%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20%2F%2F%20Note%3A%20A%20bag%20for%20i32%2C%20holding%20nothing!%20We%20have%20to%20specify%20the%20type%0A%20%20%20%20%2F%2F%20because%20otherwise%20Rust%20would%20not%20know%20what%20type%20of%20bag%20it%20is.%0A%20%20%20%20let%20i32_bag%20%3D%20BagOfHolding%3A%3A%3Ci32%3E%20%7B%20item%3A%20None%20%7D%3B%0A%0A%20%20%20%20if%20i32_bag.item.is_none()%20%7B%0A%20%20%20%20%20%20%20%20println!(%22there's%20nothing%20in%20the%20bag!%22)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20println!(%22there's%20something%20in%20the%20bag!%22)%0A%20%20%20%20%7D%0A%0A%20%20%20%20let%20i32_bag%20%3D%20BagOfHolding%3A%3A%3Ci32%3E%20%7B%20item%3A%20Some(42)%20%7D%3B%0A%0A%20%20%20%20if%20i32_bag.item.is_some()%20%7B%0A%20%20%20%20%20%20%20%20println!(%22there's%20something%20in%20the%20bag!%22)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20println!(%22there's%20nothing%20in%20the%20bag!%22)%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20match%20lets%20us%20deconstruct%20Option%20elegantly%20and%20ensure%20we%20handle%20all%20cases!%0A%20%20%20%20match%20i32_bag.item%20%7B%0A%20%20%20%20%20%20%20%20Some(v)%20%3D%3E%20println!(%22found%20%7B%7D%20in%20bag!%22%2C%20v)%2C%0A%20%20%20%20%20%20%20%20None%20%3D%3E%20println!(%22found%20nothing%22)%2C%0A%20%20%20%20%7D%0A%7D%0A"
	{links}
>
	<p>
		Rust has a built in generic enum called <code>{'Option<T>'}</code> that allows us to represent
		nullable values without using <code>null</code>.
	</p>

	<p><code>{'Option<T>'}</code> has the 2 values <code>None</code> and <code>Some(T)</code></p>

	<p>
		This enum is so common, instances of the enum can be created anywhere with the enum variants <code
			>Some</code
		>
		and <code>None</code>.
	</p>
</Lesson>
