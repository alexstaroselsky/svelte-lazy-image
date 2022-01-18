<script>
	import { LazyImage, useLazyImage as lazyImage } from '$lib';
</script>

<div>
	<h1>svelte-lazy-image</h1>
	<p class="content">
		<a href="https://svelte.dev/docs#template-syntax-element-directives-use-action" target="blank"
			>use:action</a
		> and component to load image using IntersectionObserver.
	</p>

	<p>Scroll down with dev tools open to see loading and event emit.</p>

	<p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit.'.repeat(500)}</p>

	<div>
		<h2>use:action</h2>
		<div>
			<img
				src="https://via.placeholder.com/250?text=placeholder1"
				data-src="https://via.placeholder.com/250?text=src1"
				alt="foobar"
				use:lazyImage={{ threshold: 1.0 }}
			/>
		</div>
	</div>

	<br />

	<div>
		<h2>Component</h2>
		<div>
			<LazyImage
				src="https://via.placeholder.com/250?text=src2"
				placeholder="https://via.placeholder.com/250?text=placeholder2"
				alt="Lorem Ipsum"
				on:intersecting={() => console.log('intersecting2')}
			/>
		</div>
	</div>
</div>
