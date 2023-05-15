import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path = $page.url.href;
  $$unsubscribe_page();
  return `<main><div class="row"><h1 class="text-center col">Paint</h1></div>
	
	${escape(path)}</main>


`;
});
export {
  Page as default
};
