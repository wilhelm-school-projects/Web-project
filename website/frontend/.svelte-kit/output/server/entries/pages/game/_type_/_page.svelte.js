import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as subscribe } from "../../../../chunks/index2.js";
import { B as ButtonLogout } from "../../../../chunks/ButtonLogout.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/stores2.js";
const NavbarGame_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#bottom-navbar.svelte-1laoi5p{padding-bottom:1rem}",
  map: null
};
const NavbarGame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let texts = ["Draw", "Clear", "Settings"];
  $$result.css.add(css$1);
  return `<div id="bottom-navbar" class="navbar row padding-bottom justify-content-center d-flex svelte-1laoi5p">${validate_component(ButtonLogout, "ButtonLogout").$$render($$result, {}, {}, {})}</div>
<nav id="bottom-navbar" class="navbar row padding-bottom justify-content-center d-flex svelte-1laoi5p">${each(texts, (text, i) => {
    return `<button id="${"button-" + escape(text, true) + "-drawing-pane"}" class="col text-dark text-center btn btn-outline-secondary svelte-1laoi5p">${escape(texts[i])}
        </button>`;
  })}
</nav>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#game-canvas.svelte-oj7mwg{touch-action:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let gameType = $page.url.href.split("/").at($page.url.href.split("/").length - 1);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="game-container">${validate_component(NavbarGame, "NavbarGame").$$render($$result, {}, {}, {})}
	<div class="row"><h1 class="text-center col">${escape(gameType)}</h1></div>
	<div id="canvas-wrapper" class="row"><canvas id="game-canvas" class="svelte-oj7mwg"></canvas></div>
</main>`;
});
export {
  Page as default
};
