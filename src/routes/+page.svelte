<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData; // Load data from page.server.ts
	$: tutorials = data.data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<section>
	<ul>
		{#each tutorials as tutorial}
			<li>{tutorial.title}</li>
		{/each}
	</ul>
</section>
