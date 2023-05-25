import { c as create_ssr_component, g as get_store_value } from "./index2.js";
import { a as authHandlerShared } from "./stores2.js";
const ButtonLogout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  get_store_value(authHandlerShared);
  return `<button id="button-logout" class="col btn btn-outline-secondary">Logout
</button>`;
});
export {
  ButtonLogout as B
};
