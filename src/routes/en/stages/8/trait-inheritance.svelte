<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	index={8}
	title="Trait Inheritance"
	previous="implemented-methods-on-traits"
	next="dynamic-vs-static-dispatch"
	playgroundUrl="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=struct%20SeaCreature%20%7B%0A%20%20%20%20pub%20name%3A%20String%2C%0A%20%20%20%20noise%3A%20String%2C%0A%7D%0A%0Aimpl%20SeaCreature%20%7B%0A%20%20%20%20pub%20fn%20get_sound(%26self)%20-%3E%20%26str%20%7B%0A%20%20%20%20%20%20%20%20%26self.noise%0A%20%20%20%20%7D%0A%7D%0A%0Atrait%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%3B%0A%7D%0A%0Atrait%20LoudNoiseMaker%3A%20NoiseMaker%20%7B%0A%20%20%20%20fn%20make_alot_of_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20self.make_noise()%3B%0A%20%20%20%20%20%20%20%20self.make_noise()%3B%0A%20%20%20%20%20%20%20%20self.make_noise()%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aimpl%20NoiseMaker%20for%20SeaCreature%20%7B%0A%20%20%20%20fn%20make_noise(%26self)%20%7B%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20%26self.get_sound())%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aimpl%20LoudNoiseMaker%20for%20SeaCreature%20%7B%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20creature%20%3D%20SeaCreature%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20String%3A%3Afrom(%22Ferris%22)%2C%0A%20%20%20%20%20%20%20%20noise%3A%20String%3A%3Afrom(%22blub%22)%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20creature.make_alot_of_noise()%3B%0A%7D%0A"
>
	<p>Traits can inherit methods from other traits.</p>
</Lesson>
