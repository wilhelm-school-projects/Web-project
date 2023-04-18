import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// import preprocess from 'svelte/types/compiler/preprocess'
import preprocess from 'svelte-preprocess';
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  
  // For some reason "vitePreProcess" doesn't work if I write in Typescript, but "preprocess" works with Typescript.
  // preprocess: vitePreprocess(),
  
  preprocess : preprocess(),
}
