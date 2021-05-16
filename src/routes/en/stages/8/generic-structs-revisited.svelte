<script lang="ts">
	import Lesson from '$components/lesson.svelte';
</script>

<Lesson title="Stage 8.15: Generic Structs Revisited" previous="box" next="summary">
	<p>Generic structs can also have their parameterized types constrained by traits:</p>
	<pre>
        <code>
struct MyStruct{'<T>'}
where
    T: MyTrait
{ '{'}
    foo: T
    ...
{ '}'}
        </code>
    </pre>

	<p>Generic structs have their parameterized type in their implementation blocks:</p>
	<pre>
        <code>
impl{'<T>'} MyStruct{'<T>'} { '{'}
    ...
{ '}'}
        </code>
    </pre>
</Lesson>
