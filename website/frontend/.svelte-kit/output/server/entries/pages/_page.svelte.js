import { c as create_ssr_component } from "../../chunks/index2.js";
import "@auth0/auth0-spa-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<main><div id="header" class="row"><div class="col d-flex justify-content-center"><h1 class="h1">Montem!</h1></div></div>
	<div class="row"><div id="left-col" class="col-2 border"></div>
		<div id="main-col" class="col"><form class=""><label for="">Sign in</label>
				<input type="text" class="rounded">
				<input type="" class="rounded"></form></div>
		<div id="right-col" class="col-2 border"></div></div>
</main>`;
});
export {
  Page as default
};
