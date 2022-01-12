<script>
  import { onMount } from "svelte";

  let observerCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersected = true;
        observer.unobserve(imgElement);
      }
    });
  };

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

  $: cssClass = $$props.class || "";

  let imgElement;
  let path;

  let observer;
  let intersected = false;
  let loaded = false;

  $: path = intersected ? src : placeholder;

  onMount(() => {
    observer = new IntersectionObserver(observerCallback);
    observer.observe(imgElement);

    return () => {
      observer.unobserve(imgElement);
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
