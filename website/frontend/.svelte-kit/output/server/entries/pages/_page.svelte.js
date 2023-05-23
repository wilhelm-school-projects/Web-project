import { c as create_ssr_component, g as get_store_value, d as add_attribute } from "../../chunks/index2.js";
import { a as authHandler } from "../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userEmail;
  let password;
  {
    {
      console.log("denna körs!");
      get_store_value(authHandler).setEmail(userEmail);
      get_store_value(authHandler).setPassword(password);
      console.log(get_store_value(authHandler).userEmail);
      console.log(get_store_value(authHandler).password);
    }
  }
  return `
<main>
    <button>X
    </button>
    <div id="header" class="row"><div class="col d-flex justify-content-center"><h1 class="h1">Montem!</h1></div></div>

    <div class="row"><div id="left-col" class="col-2 border"></div>
        <form id="main-col" class="col d-flex justify-content-center">
            <div><div class="row"><label for="userEmail">Email: </label>
                    <input name="userEmail" type="email" class="rounded"${add_attribute("value", userEmail, 0)}></div>
                <div class="row"><label for="password">Password: </label>
                    <input name="password" type="password" class="rounded"${add_attribute("value", password, 0)}></div></div></form>
        
        <div id="right-col" class="col-2 border"></div></div>
    <div class="row"><button id="button-signin" class="col btn btn-primary">Sign in
        </button></div>
    <div class="row"><button id="button-signup" class="col btn btn-danger">Sign up </button></div>

    <div id="modal-wrong-credentials" class="modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Wrong input!</h5></div>
                <div class="modal-body">Try again..</div>
                <div class="modal-footer"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">X
                    </button></div></div></div></div>
</main>`;
});
export {
  Page as default
};
