# svelte-lazy-image

Svelte component to lazy load images using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## Consuming this component

Your package.json has a `"svelte"` field pointing to `src/index.svelte`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

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