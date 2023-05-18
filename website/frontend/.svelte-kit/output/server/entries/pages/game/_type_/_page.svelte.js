import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { r as readable } from "../../../../chunks/index.js";
import "firebase/app";
import "firebase/database";
readable("context-id-1");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#game-canvas.svelte-12yie24{touch-action:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let gameType = $page.url.href.split("/").at($page.url.href.split("/").length - 1);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="game-container"><div class="row"><h1 class="text-center col">${escape(gameType)}</h1></div>
	<div id="canvas-wrapper" class="row"><canvas id="game-canvas" class="svelte-12yie24"></canvas></div>
	
</main>`;
});
export {
  Page as default
};
