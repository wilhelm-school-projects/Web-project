import { c as create_ssr_component } from "../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<nav class="row justify-content-center d-flex"><a class="col text-center" href="/home">Home </a>
	<a class="col text-center" href="/">Sign in </a>
	<a class="col text-center" href="/home/settings">settings </a></nav>



${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
