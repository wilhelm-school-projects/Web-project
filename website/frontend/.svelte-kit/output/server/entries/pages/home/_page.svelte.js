import { c as create_ssr_component, d as each, v as validate_component, e as escape, b as add_attribute, g as get_store_value } from "../../../chunks/index2.js";
import { B as ButtonLogout } from "../../../chunks/ButtonLogout.js";
import { a as authHandler } from "../../../chunks/stores2.js";
import "firebase/database";
import "set-interval-async";
const NavbarHome_svelte_svelte_type_style_lang = "";
const css = {
  code: "#bottom-navbar.svelte-1d4vcpx{padding-bottom:1rem}",
  map: null
};
const NavbarHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paths = ["/home", ""];
  let texts = ["Settings", "I am bored"];
  $$result.css.add(css);
  return `<nav id="bottom-navbar" class="navbar fixed-bottom row padding-bottom justify-content-center d-flex svelte-1d4vcpx">${each(paths, (path, i) => {
    return `<a id="${"anchor-" + escape(path, true)}" class="col text-center btn btn-outline-secondary svelte-1d4vcpx"${add_attribute("href", path, 0)}>${escape(texts[i])}
		</a>`;
  })}
	${validate_component(ButtonLogout, "ButtonLogout").$$render($$result, {}, {}, {})}
</nav>`;
});
const ConnectorClient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="row d-flex justify-content-center"><form class="row" action=""><div class="row"><label class="col" for="">Canvas Name </label>
                
                
                <input class="col rounded" type="text"></div>
            <div class="row"><div class="col d-flex justify-content-center"><a id="anchor-game" class="col text-center btn btn-outline-secondary" href="">Connect
                    </a></div></div></form></div></main>`;
});
const ConnectorHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvasID = "";
  return `<main><div class="row d-flex justify-content-center"><form class="row" action=""><div class="row"><label class="col" for="">Canvas Name </label>
                <input class="col rounded" type="text"${add_attribute("value", canvasID, 0)}></div>
            <div class="row"><div class="col d-flex justify-content-center"><a class="col text-center btn btn-outline-secondary" href="/game/host">Host
                    </a></div></div></form></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  get_store_value(authHandler);
  return `<main class="row d-flex justify-content-center text-info">
	<div id="modal-game-type" class="modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Open drawing pane</h5>
					
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
				<div class="modal-body row"><button class="col btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#connector-host" aria-expanded="false" aria-controls="connector-host">Host
					</button>
					<button class="col btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#connector-client" aria-expanded="false" aria-controls="connector-client">Connect
					</button></div>
				<div class="collapse" id="connector-host"><div class="card card-body d-flex justify-content-center">${validate_component(ConnectorHost, "ConnectorHost").$$render($$result, {}, {}, {})}</div></div>
				<div class="collapse" id="connector-client"><div class="card card-body">${validate_component(ConnectorClient, "ConnectorClient").$$render($$result, {}, {}, {})}</div></div></div></div></div>

	<div class="col-1 border bg-danger"></div>
	<div id="content" class="col bg-info text-white"><p class="display-2">ipsumquam ducimus</p></div>
	<div class="col-1 border bg-danger"><div></div></div>

	${validate_component(NavbarHome, "NavbarHome").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
