# svelte-lazy-image

Svelte component to lazy load images using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## Usage

```bash
npm install svelte-lazy-image
```

### Svelte:

```html
<script>
  import LazyImage from 'svelte-lazy-image';
</script>

<LazyImage
  src="https://via.placeholder.com/250?text=src"
  placeholder="https://via.placeholder.com/250?text=placeholder"
  alt="Lorem Ipsum"
/>
```