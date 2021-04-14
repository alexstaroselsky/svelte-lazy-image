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

The component uses `$$restProps` to pass props other than `placeholder`, `src`, or `alt` to the underlying `img` element. An example using `img` attributes `srcset` and `sizes`:

```html
<script>
  import LazyImage from 'svelte-lazy-image';
</script>

<LazyImage
  src="https://via.placeholder.com/250?text=src"
  placeholder="https://via.placeholder.com/250?text=placeholder"
  alt="Lorem Ipsum"
  srcset="https://via.placeholder.com/480 480w, https://via.placeholder.com/800 800w"
  sizes="(max-width: 600px) 480px, 800px"
/>
```