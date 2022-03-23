<script>
	import { onMount } from 'svelte';

	/**
	 * Path to placeholder image.
	 * @type {string}
	 */
	export let placeholder;

	/**
	 * Path to image.
	 * @type {string}
	 */
	export let src;

	/**
	 * Alt image text description for accessibility.
	 * @type {string}
	 */
	export let alt;

	/**
	 * IntersectionObserver options
	 * @type {{ root?: any; rootMargin?: string; threshold?: number; }}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver}
	 */
	export let options = { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0.0 };

	let imgElement;
	let path;

	let observer;
	let intersected = false;
	let loaded = false;

	$: path = intersected ? src : placeholder;
	$: cssClass = $$props.class || '';

	onMount(() => {
		observer = new IntersectionObserver((entries, self) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					intersected = true;
					self.unobserve(imgElement);
				}
			});
		}, options);
		observer.observe(imgElement);

		return () => {
			if (observer) {
				observer.unobserve(imgElement);
			}
		};
	});

	function handleLoad() {
		if (!loaded && path === src) {
			loaded = true;
		}
	}
</script>

<img
	src={path}
	{alt}
	on:load={handleLoad}
	bind:this={imgElement}
	{...$$restProps}
	class="svelte-lazy-image {cssClass}"
	class:svelte-lazy-image--loaded={loaded}
/>
