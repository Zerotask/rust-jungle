<script lang="ts">
	import Lesson from '$components/lesson/lesson.svelte';
</script>

<Lesson
	index={9}
	title="Dynamic vs Static Dispatch"
	summary="Methods are executed in two ways: static or dynamic"
	tags="methods"
	previous="trait-inheritance"
	next="trait-objects"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Atrait%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%3B%0A%7D%0A%0Aimpl%20NoiseMaker%20for%20SeaCreature%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20%26self.get_sound())%3B%0A%20%20%20%20%7D%0A%7D%0A%0Afn%20static_make_noise(creature%3A%20%26SeaCreature)%20%7B%0A%20%20%20%20%2F%2F%20we%20know%20the%20real%20type%0A%20%20%20%20creature.make_noise()%3B%0A%7D%0A%0Afn%20dynamic_make_noise(noise_maker%3A%20%26dyn%20NoiseMaker)%20%7B%0A%20%20%20%20%2F%2F%20we%20don't%20know%20the%20real%20type%0A%20%20%20%20noise_maker.make_noise()%3B%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20static_make_noise(%26creature)%3B%0A%20%20%20%20dynamic_make_noise(%26creature)%3B%0A%7D%0A"
	furtherInformationUrls="https://doc.rust-lang.org/std/keyword.dyn.html"
>
	<p>Methods are executed in two ways:</p>
	<ul>
		<li>
			static dispatch - When the instance type is known, we have direct knowledge of what function
			to call.
		</li>
		<li>
			dynamic dispatch - When an instance type is not known, we must find out some way of calling
			the correct function.
		</li>
	</ul>

	<p>
		Trait types <code>&dyn MyTrait</code> give us the ability to work with instances of objects indirectly
		using dynamic dispatch.
	</p>

	<p>
		When dynamic dispatch is used, Rust will encourage you to put <code>dyn</code> before your trait
		type so people are aware.
	</p>

	<p>Memory details:</p>
	<ul>
		<li>
			Dynamic dispatch is slightly slower because of the pointer chasing to find the real function
			call.
		</li>
	</ul>
</Lesson>
