/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LazyImageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["img"]> {
  /**
   * Path to placeholder image.
   */
  placeholder?: string;

  /**
   * Path to image.
   */
  src?: string;

  /**
   * Alt image text description for accessibility.
   */
  alt?: string;
}

export default class LazyImage extends SvelteComponentTyped<
  LazyImageProps,
  {},
  {}
> {}
