<script>
  import { onMount } from "svelte";

  let observerCallback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersected = true;
        observer.unobserve(imgElement);
      }
    });
  };

  export let placeholder;
  export let src;
  export let alt;

  let imgElement;
  let path;

  let observer;
  let intersected = false;
  let loaded = false;

  $: path = intersected ? src : placeholder;

  onMount(() => {
    observer = new IntersectionObserver(observerCallback)
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
  class="svelte-lazy-image"
  class:svelte-lazy-image--loaded={loaded}
/>
