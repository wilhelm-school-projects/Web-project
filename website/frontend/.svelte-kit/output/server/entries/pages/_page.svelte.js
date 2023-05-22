import { c as create_ssr_component, d as add_attribute } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userEmail;
  let password;
  return `
<main><div id="header" class="row"><div class="col d-flex justify-content-center"><h1 class="h1">Montem!</h1></div></div>

    <div class="row"><div id="left-col" class="col-2 border"></div>
        <form id="main-col" class="col d-flex justify-content-center">
            <div><div class="row"><label for="userEmail">Email: </label>
                    <input name="userEmail" type="email" class="rounded"${add_attribute("value", userEmail, 0)}></div>
                <div class="row"><label for="password">Password: </label>
                    <input name="password" type="text" class="rounded"${add_attribute("value", password, 0)}></div></div></form>
        
        <div id="right-col" class="col-2 border"></div></div>
    <div class="row"><button id="button-signin" class="col btn btn-primary">Sign in
        </button></div>
    <div class="row"><button id="button-signup" class="col btn btn-danger">Sign up
        </button></div>
</main>`;
});
export {
  Page as default
};
