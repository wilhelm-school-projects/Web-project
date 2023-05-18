import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/entry/_layout.svelte.aef32f4d.js","_app/immutable/chunks/index.3fff79e7.js","_app/immutable/entry/_layout.js.ae0bf274.js","_app/immutable/chunks/_layout.1bc48a04.js"];
export const stylesheets = [];
export const fonts = [];
