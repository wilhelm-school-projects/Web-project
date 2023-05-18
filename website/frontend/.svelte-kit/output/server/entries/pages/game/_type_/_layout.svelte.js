import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let texts = ["Draw", "Send", "dummy"];
  return `


<nav id="bottom-navbar" class="navbar row padding-bottom justify-content-center d-flex">${each(texts, (text, i) => {
    return `<button id="${"button-" + escape(text, true) + "-drawing-pane"}" class="col text-center btn btn-outline-secondary">${escape(texts[i])}
        </button>`;
  })}</nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
