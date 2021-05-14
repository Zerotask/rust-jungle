<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson
	title="Stage 1: Variablen"
	previous="the-rust-playground"
	src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2F%20rust%20infers%20the%20type%20of%20x%0A%20%20%20%20let%20x%20%3D%2013%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%0A%20%20%20%20%2F%2F%20rust%20can%20also%20be%20explicit%20about%20the%20type%0A%20%20%20%20let%20x%3A%20f64%20%3D%203.14159%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%0A%20%20%20%20%2F%2F%20rust%20can%20also%20declare%20and%20initialize%20later%2C%20but%20this%20is%20rarely%20done%0A%20%20%20%20let%20x%3B%0A%20%20%20%20x%20%3D%200%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20x)%3B%0A%7D%0A"
>
	<p>Variablen werden mit dem Schlüsselwort <i>let</i> deklariert.</p>
	<p>
		Im Regelfall sollte man Rust die Entscheidung überlassen, um welchen Datentypen es sich handelt.
		In Sonderfällen kann der Typ explizit angegeben werden.
	</p>
	<p>
		Huch, was ist denn bei dem Beispiel los? Die Variable <i>x</i> wird mehrmals deklariert?
	</p>
	<p>
		Das ist kein Fehler - Rust erlaubt sogenanntes variable shadowing (Variable überschatten). Bei
		Neudeklaration "verfällt" die vorige Deklaration und wir können mit der Variable arbeiten, als
		ob es sie davor noch nie gegeben hätte. Der Datentyp darf sich dabei auch ändern.
	</p>
	<p>Variablennamen werden ebenfalls in <i>snake_case</i> geschrieben.</p>
</Lesson>
