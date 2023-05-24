import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/entry/layout.svelte.dacf7c62.js","_app/immutable/chunks/index.c5e23121.js","_app/immutable/entry/_layout.js.ae0bf274.js","_app/immutable/chunks/_layout.1bc48a04.js"];
export const stylesheets = [];
export const fonts = [];
