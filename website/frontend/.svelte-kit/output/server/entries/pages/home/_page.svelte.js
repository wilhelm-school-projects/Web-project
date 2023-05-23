import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
/* empty css                                                        */import "../../../chunks/stores2.js";
const ConnectorClient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hostEmail = "";
  return `<main><div class="row d-flex justify-content-center"><form class="row" action=""><div class="row"><label class="col" for="">Host Email </label>
                <input class="col rounded" type="text"${add_attribute("value", hostEmail, 0)}></div>
            <div class="row"><div class="col d-flex justify-content-center"><button class="row col text-center btn btn-outline-secondary">Connect
                    </button></div></div></form></div></main>`;
});
const ConnectorHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvasName = "";
  return `<main><div class="row d-flex justify-content-center"><form class="row" action=""><div class="row"><label class="col" for="">Canvas Name </label>
                <input class="col rounded" type="text"${add_attribute("value", canvasName, 0)}></div>
            <div class="row"><div class="col d-flex justify-content-center"><button class="row col text-center btn btn-outline-secondary">Start Hosting
                    </button></div></div></form></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
</main>`;
});
export {
  Page as default
};
